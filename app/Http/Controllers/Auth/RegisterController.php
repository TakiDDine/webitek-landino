<?php

namespace App\Http\Controllers\Auth;

use DB;
use App\User;
use App\Company;
use App\Contact;
use App\Package;
use App\Affiliate;
use App\EmailTemplate;
use App\Utilities\Overrider;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\DB as FacadesDB;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    
	//protected $redirectTo = '/dashboard';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
		Overrider::load("Settings");
        $this->middleware('guest');
        $this->middleware('throttle:5,1')->only('register');
    }
	
	public function redirectTo(){
		if(auth()->user()->user_type == "user"){
			if(has_membership_system() == 'enabled'){
				if( membership_validity() < date('Y-m-d')){
				    return 'membership/extend';
				}
			}
		}
		return '/dashboard';
	}
	
    public function showRegistrationForm(?string $affiliate_id = null)
	{
        if (get_option('allow_singup', 'yes') != 'yes') {
            return redirect('login');
        } else {
            $affiliateUser = User::where(['affiliate_id' => $affiliate_id])->first();
            if ($affiliateUser) {
                $id = $affiliateUser->id;
                FacadesDB::update("UPDATE affiliates SET visitors = visitors + 1 WHERE user_id = $id");
            }
            return view('auth.register', compact('affiliate_id'));
            return view('auth.register');
        }
	}

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            // 'business_name' => ['required', 'string', 'max:191'],
            'name' => ['required', 'string', 'max:191'],
            'email' => ['required', 'string', 'email', 'max:191', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
            'phone' => ['required', 'string'],

            // 'package' => ['required'],
            // 'package_type' => ['required'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    // protected function create(array $data)
    // {
    //     @ini_set('max_execution_time', 0);
    //     @set_time_limit(0);

		
    //     $package = Package::findOrFail($request->package);
	// 	if($package->type == 'free') {

    //         $valid_to = '3022-06-20';

    //         DB::beginTransaction();
    //         //Create Company
    //         $company = new Company();
    //         $company->business_name = $data['business_name'];
    //         $company->package_type = 'Free';
    //         $company->package_id = $data['package'];
    //         $company->membership_type = 'Free';
    //         $company->status = 1;
    //         $company->valid_to = '3022-06-20';
    
    //         //Package Details
    //         $package = $company->package;
    //         $company->websites_limit = $package->websites_limit;
    //         $company->recurring_transaction = 'NO';
    //         $company->online_payment = 'NO';
    
    //         $company->save();
    
    //     } else {

    //         $trial_period = get_option('trial_period', 14);
		
    //         if($trial_period < 1){
    //             $valid_to = date('Y-m-d', strtotime(date('Y-m-d'). " -1 day"));
    //         }else{
    //             $valid_to = date('Y-m-d', strtotime(date('Y-m-d'). " + $trial_period days"));
    //         }

    //         DB::beginTransaction();
    //         //Create Company
    //         $company = new Company();
    //         $company->business_name = $data['business_name'];
    //         $company->package_id = $data['package'];
    //         $company->package_type = $data['package_type'];
    //         $company->membership_type = 'trial';
    //         $company->status = 1;
    //         $company->valid_to = $valid_to;
    
    //         //Package Details
    //         $package = $company->package;
    //         $company->websites_limit = unserialize($package->websites_limit)[$company->package_type];
    //         $company->recurring_transaction = unserialize($package->recurring_transaction)[$company->package_type];
    //         $company->online_payment = unserialize($package->online_payment)[$company->package_type];
    
    //         $company->save();
    //     }
		
       

    //      //Create User      
    //     $user = new User();
    //     $user->name = $data['name'];
    //     $user->email = $data['email'];
	// 	if( get_option('email_verification') == 'disabled' ){
	// 		$user->email_verified_at = now();
	// 	}
    //     $user->password = Hash::make($data['password']);
    //     $user->user_type = 'user';
    //     $user->status = 1;
    //     $user->profile_picture = 'default.png';
    //     $user->company_id = $company->id;
    //     $user->save();

    //     DB::commit();
		
	// 	return $user;
    // }
	

    protected function create(array $data, $withAffiliate)
    {
        @ini_set('max_execution_time', 0);
        @set_time_limit(0);

        $trial_period = get_option('trial_period', 14);

        if ($trial_period < 1) {
            $valid_to = date('Y-m-d', strtotime(date('Y-m-d') . " -1 day"));
        } else {
            $valid_to = date('Y-m-d', strtotime(date('Y-m-d') . " + $trial_period days"));
        }

        DB::beginTransaction();
        //Create Company
        $company = new Company();
        $company->business_name = '';
        $company->package_id = 1;
        // $company->package_id = $data['package'];
        $company->package_type = 'monthly';
        $company->membership_type = 'trial';
        $company->status = 1;
        $company->valid_to = $valid_to;

        //Package Details
        $package = $company->package;
        // $company->websites_limit = unserialize($package->websites_limit)[$company->package_type];
        // $company->recurring_transaction = unserialize($package->recurring_transaction)[$company->package_type];
        // $company->online_payment = unserialize($package->online_payment)[$company->package_type];

        $company->save();

        //Create User      
        $user = new User();
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->phone = $data['phone'];
        if (get_option('email_verification') == 'disabled') {
            $user->email_verified_at = now();
        }
        $user->password = Hash::make($data['password']);
        $user->user_type = 'user';
        $user->status = 1;
        $user->company_id = $company->id;
        if ($withAffiliate) {
            // Get the user
            $affiliateUser = User::where(['affiliate_id' => $data['affiliate_id']])->first();
            if ($affiliateUser) {
                $user->affiliate_user_id = $affiliateUser->id;
                $id = $affiliateUser->id;
                FacadesDB::update("UPDATE affiliates SET registration = registration + 1 WHERE user_id = $id");
            }
        }
        $user->affiliate_id = generate_affiliate_id(10);
        $user->save();

        Affiliate::create([
            'user_id' => $user->id
        ]);

        DB::commit();

        return $user;
    }
	public function client_signup(Request $request){
        @ini_set('max_execution_time', 0);
        @set_time_limit(0);

		if($request->isMethod('get')){

            if(get_option('allow_singup','yes') != 'yes'){
                return redirect('login');
            }else{
                return view('auth.client_signup');
            }
			
		}else if($request->isMethod('post')){
            $package = Package::findOrFail($request->package);
            if($package->type == 'free') {

                $validator = Validator::make($request->all(), [
                    'name' => 'required|max:191',
                    'email' => 'required|email|unique:users|max:191',
                    'password' => 'required|max:20|min:6|confirmed',
                    'business_name' => 'required',
                    'package' => 'required',
                    'g-recaptcha-response' => 'required|captcha',
                ]);

                if ($validator->fails()) {
                    if($request->ajax()){ 
                        return response()->json(['result'=>'error','message'=>$validator->errors()->all()]);
                    }else{
                        return back()->withErrors($validator)
                                    ->withInput();
                    }			
                }


                DB::beginTransaction();

                //Create Company
                $company = new Company();
                $company->business_name = $request->business_name;
                $company->business_name = $request->business_name;
                $company->package_id = $request->package;
                $company->package_type = 'Free';
                $company->membership_type = 'Free';
                $company->status = 1;
                $company->valid_to = '3022-06-20';

                //Package Details
                $package = $company->package;
                $company->websites_limit = $package->websites_limit;
                $company->recurring_transaction = 'NO';
                $company->online_payment = 'NO';

                $company->save();

            } else {
                
                $validator = Validator::make($request->all(), [
                    'name' => 'required|max:191',
                    'email' => 'required|email|unique:users|max:191',
                    'password' => 'required|max:20|min:6|confirmed',
                    'business_name' => 'required',
                    'package_type' => 'required',
                    'package_type' => 'required',
                    'package' => 'required',
                    'g-recaptcha-response' => 'required|captcha',
                ]);
                
                if ($validator->fails()) {
                    if($request->ajax()){ 
                        return response()->json(['result'=>'error','message'=>$validator->errors()->all()]);
                    }else{
                        return back()->withErrors($validator)
                                     ->withInput();
                    }			
                }
    
                $trial_period = get_option('trial_period', 14);
                
                if($trial_period < 1){
                    $valid_to = date('Y-m-d', strtotime(date('Y-m-d'). " -1 day"));
                }else{
                    $valid_to = date('Y-m-d', strtotime(date('Y-m-d'). " + $trial_period days"));
                }
                
                DB::beginTransaction();
    
                //Create Company
                $company = new Company();
                $company->business_name = $request->business_name;
                $company->business_name = $request->business_name;
                $company->package_id = $request->package;
                $company->package_type = $request->package_type;
                $company->membership_type = 'trial';
                $company->status = 1;
                $company->valid_to = $valid_to;
    
                //Package Details
                $package = $company->package;
                $company->websites_limit = unserialize($package->websites_limit)[$company->package_type];
                $company->recurring_transaction = unserialize($package->recurring_transaction)[$company->package_type];
                $company->online_payment = unserialize($package->online_payment)[$company->package_type];
    
                $company->save();
    
            }

            //Create User      
            $user = new User();
			$user->name = $request->name;
			$user->email = $request->email;
            if( get_option('email_verification') == 'disabled' ){
                $user->email_verified_at = now();
            }
			$user->password = Hash::make($request->password);
            $user->user_type = 'user';
            $user->status = 1;
            
	        $user_language = session('user_language'); 
		    if($user_language == ''){
                $user_language = get_option('language');
            }
			$user->language = $user_language;
			$user->profile_picture = 'default.png';
            $user->company_id = $company->id;
            $user->save();

            DB::commit();
			
			if($user->id > 0){ 
			   return redirect('login')->with('registration_success', _lang('Registration Sucessfully. You May Login to your account.'));
			}
		
		}
	}

    protected function registered(Request $request, $user)
    {
        //
    }

     /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request, ?string $affiliate_id = null)
    {
        $this->validator($request->all())->validate();

        $user = null;
        if ($affiliate_id) {
            $user = $this->create(array_merge($request->all(), ['affiliate_id' => $affiliate_id]), true);
        } else {
            $user = $this->create($request->all(), false);
        }

        event(new Registered($user));
        
        // $user->sendEmailVerificationNotification();

        $this->guard()->login($user);

        return redirect('/dashboard');
    }
}
