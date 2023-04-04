<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Company;
use App\Package;
use App\PaymentHistory;
use App\EmailTemplate;
use Illuminate\Support\Facades\Mail;
use App\Mail\PremiumMembershipMail;
use App\Utilities\Overrider;
use Validator;
use DB;
use Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB as FacadesDB;
use CMI\CmiClient;
use App\Connect2Pay\Connect2PayClient;

class PaymentController extends Controller
{

	public function __construct()
	{
		date_default_timezone_set(get_option('timezone', 'Asia/Dhaka'));
	}

	public function index()
	{
		$payments = PaymentHistory::where('user_id', auth()->user()->id)->paginate();
		return view('backend.payments.index', compact('payments'));
	}

	public function payment_history()
	{
		$payment_history = \App\PaymentHistory::with('user')->latest()->paginate();
		return view('backend.user.payments', compact('payment_history'));
	}

	public function create_offline_payment()
	{
		return view('backend.offline_payment.create');
	}


	// TODO: CHECK THIS FOR ONOINE PAYMENT
	public function store_offline_payment(Request $request)
	{
		$validator = Validator::make($request->all(), [
			'package' => 'required',
			'package_type' => 'required',
			'user' => 'required',
		]);

		if ($validator->fails()) {
			return back()->withErrors($validator)->withInput();
		}

		DB::beginTransaction();

		$package = Package::find($request->package);
		$user = User::find($request->user);
		$company = Company::find($user->company_id);

		$package_type = $request->package_type;

		if ($package_type == 'monthly') {
			$company->valid_to = date('Y-m-d', strtotime('+1 months'));
			$company->package_type = 'monthly';
		} else {
			$company->valid_to = date('Y-m-d', strtotime('+1 year'));
			$company->package_type = 'yearly';
		}

		$company->membership_type = 'member';
		$company->last_email = NULL;

		//Update Package Details
		$company->package_id = $package->id;
		$company->websites_limit = unserialize($package->websites_limit)[$company->package_type];
		$company->recurring_transaction = unserialize($package->recurring_transaction)[$company->package_type];
		$company->online_payment = unserialize($package->online_payment)[$company->package_type];

		$company->save();

		//Create Payment History
		$payment = new PaymentHistory();
		$payment->company_id = $company->id;
		$payment->title = "Buy {$package->package_name} Package";
		$payment->method = "Offline";
		$payment->currency = get_option('currency', 'USD');

		if ($package_type == 'monthly') {
			$payment->amount = $package->cost_per_month;
		} else {
			$payment->amount = $package->cost_per_year;
		}
		$payment->package_id = $package->id;
		$payment->package_type = $package_type;
		$payment->status = 'paid';
		$payment->save();

		DB::commit();

		//Replace paremeter
		$replace = array(
			'{name}' => $user->name,
			'{email}' => $user->email,
			'{valid_to}' => date('d M,Y', strtotime($company->valid_to)),
		);

		//Send email Confrimation
		Overrider::load("Settings");
		$template = EmailTemplate::where('name', 'premium_membership')->first();
		$template->body = process_string($replace, $template->body);

		try {
			Mail::to($user->email)->send(new PremiumMembershipMail($template));
		} catch (\Exception $e) {
			//Nothing
		}

		if ($payment->id > 0) {
			return back()->with('success', _lang('Offline Payment Made Sucessfully'));
		} else {
			return back()->with('error', _lang('Error Occured, Please try again !'));
		}
	}

	public function accept(int $id)
	{
		$payment = PaymentHistory::with('user')->findOrFail($id);
		$user = $payment->user;

		if (!$user->referal && $affId = $user->affiliate_user_id) {
			$affiliateUser = User::findOrFail($affId);
			$id = $affiliateUser->id;
			FacadesDB::update("UPDATE affiliates SET referrals = referrals + 1 WHERE user_id = $id");
		}

		$company = Company::findOrFail($user->company_id);
		$package = Package::findOrFail($company->package_id);

		$company->membership_type = 'member';
		$company->last_email = NULL;
		$company->websites_limit = unserialize($package->websites_limit)[$company->package_type];
		$company->recurring_transaction = unserialize($package->recurring_transaction)[$company->package_type];
		$company->online_payment = unserialize($package->online_payment)[$company->package_type];
		$company->save();

		$payment->update([
			'is_accepted' => true,
			'accepted_at' => now(),
			'status' => 'accepted',
		]);

		return redirect('members/payment_history')->with('success', _lang('The payment was accepted with success'));
	}

	public function deletePayment(int $id)
	{
		PaymentHistory::with('user')->where(['method' => 'cih', 'id' => $id])->firstOrFail()->delete();
		\Session::flash('success', _lang('The payment was deleted with success'));
		return redirect('members/payment_history');
	}

	public function download(PaymentHistory $payment)
	{
		if (!$payment->getToDate() || $payment->user_id !== auth()->user()->id) {
			return redirect()->back();
		}

		return view('backend.payments.download', compact('payment'));
	}

	public function failedCmi(Request $request)
	{
		$request->session()->forget('merchantToken');
		return redirect('/dashboard')->with('error', _lang('Payment error '));
	}

	public function successCmi(Request $request)
	{
		if ($request->session()->has('merchantToken')) {
			$request->session()->forget('merchantToken');

			DB::beginTransaction();

			$package = Package::find(1);
			$user = auth()->user();
			$company = Company::find($user->company_id);
			$package_type = "monthly";
			if ($package_type == 'monthly') {
				$company->valid_to = date('Y-m-d', strtotime('+1 months'));
				$company->package_type = 'monthly';
			} else {
				$company->valid_to = date('Y-m-d', strtotime('+1 year'));
				$company->package_type = 'yearly';
			}

			$company->membership_type = 'member';
			$company->last_email = NULL;

			//Update Package Details
			$company->package_id = $package->id;
			$company->websites_limit = unserialize($package->websites_limit)[$company->package_type];
			$company->recurring_transaction = unserialize($package->recurring_transaction)[$company->package_type];
			$company->online_payment = unserialize($package->online_payment)[$company->package_type];

			$company->save();

			//Create Payment History
			$payment = new PaymentHistory();
			$payment->company_id = $company->id;
			$payment->title = "Buy {$package->package_name} Package";
			$payment->method = "CMI";
			$payment->currency = get_option('currency', 'USD');
			$payment->user_id = $user->id;

			if ($package_type == 'monthly') {
				$payment->amount = $package->cost_per_month;
			} else {
				$payment->amount = $package->cost_per_year;
			}
			$payment->package_id = $package->id;
			$payment->package_type = $package_type;
			$payment->status = 'paid';
			$payment->save();

			DB::commit();

			//Replace paremeter
			$replace = array(
				'{name}' => $user->name,
				'{email}' => $user->email,
				'{valid_to}' => date('d M,Y', strtotime($company->valid_to)),
			);

			//Send email Confrimation
			Overrider::load("Settings");
			$template = EmailTemplate::where('name', 'premium_membership')->first();
			$template->body = process_string($replace, $template->body);

			// try {
			// 	Mail::to($user->email)->send(new PremiumMembershipMail($template));
			// } catch (\Exception $e) {
			// 	//Nothing
			// }

			if ($payment->id > 0) {
				return redirect('/dashboard')->with('success', _lang('شكراً لك ، لقد تم تفعيل حسابك بنجاح'));
			} else {
				return back()->with('error', _lang('Error Occured, Please try again !'));
			}
		}

		return redirect('/dashboard');
	}

	public function cmi(Request $request)
	{
		if ($request->isMethod('get')) {
			$package = Package::find(1);
			$payment = new PaymentHistory();
			$payment->title = $package->package_name;
			$payment->method = 'CMI';
			$payment->amount = 24;
			
			$download = false;
			
			return view('backend.payments.download', compact('payment', 'download'));
		} else {
			ini_set('display_errors', 1);
			ini_set('display_startup_errors', 1);
			error_reporting(E_ALL);

			require_once(app_path('Connect2Pay/Connect2PayClient.php'));

			# Configuration
			$configCMI = config('app.cmi');

			$url = $configCMI['url'];
			$originator = $configCMI['originator'];
			$password = $configCMI['password'];
			$success_url              = url(route('cmi.success'));
			$failure_url              = url(route('cmi.failed'));



			$user = auth()->user();
			// dd($user);
			# payment  info
			$order_id                 = uniqid();
			$client_id                =  $user->id;
			$client_first_name        = $user->name;
			$client_last_name         = '';
			// $client_phone_number      = $user->phone;
			$client_phone_number      = '0658457789';
			$client_email             = $user->email;
			$country_code             = $configCMI['country_code'];
			$currency                 = $configCMI['currency'];
			$amount                   = $configCMI['amount'];
			$description              = $configCMI['description'];

			$c2pClient = new Connect2PayClient($url, $originator, $password);

			// Set all information for the payment
			$c2pClient->setOrderID($order_id);
			$c2pClient->setPaymentMethod(Connect2PayClient::PAYMENT_METHOD_CREDITCARD); // or PAYMENT_METHOD_DIRECTDEBIT for SEPA, for example
			$c2pClient->setPaymentMode(Connect2PayClient::PAYMENT_MODE_SINGLE);
			$c2pClient->setShopperID($client_id);
			$c2pClient->setShippingType(Connect2PayClient::SHIPPING_TYPE_VIRTUAL);
			$c2pClient->setCurrency($currency);
			$c2pClient->setAmount($amount * 100);
			$c2pClient->setOrderDescription($description);
			$c2pClient->setShopperFirstName($client_first_name);
			$c2pClient->setShopperLastName($client_last_name);
			$c2pClient->setShopperAddress("NA");
			$c2pClient->setShopperZipcode("NA");
			$c2pClient->setShopperCity("NA");
			$c2pClient->setShopperCountryCode($country_code);
			$c2pClient->setShopperPhone($client_phone_number);
			$c2pClient->setShopperEmail($client_email);

			// Extra custom data that are returned with the payment status
			$c2pClient->setCtrlCustomData("Give that back to me please !!");
			// Where the customer will be redirected after the payment
			$c2pClient->setCtrlRedirectURL($success_url);
			// URL on the merchant site that will receive the callback notification
			$c2pClient->setCtrlCallbackURL($failure_url);
			
			if ($c2pClient->validate()) {
				// dd($c2pClient);
				if ($c2pClient->preparePayment()) {
					// The customer token info returned by the payment page could be saved in session (may
					// be used later when the customer will be redirected from the payment page)
					session(['merchantToken' => $c2pClient->getMerchantToken()]);

					// The merchantToken must also be used later to validate the callback to avoid that anyone
					// could call it and abusively validate the payment. It may be stored in local database for this.

					// Now redirect the customer to the payment page
					return redirect($c2pClient->getCustomerRedirectURL());
				} else {
					echo "error prepareTransaction: ";
					echo $c2pClient->getClientErrorMessage() . "\n";
				}
			} else {
				echo "Validation error occurred: " . $c2pClient->getClientErrorMessage() . "\n";
			}
		}
	}
}
