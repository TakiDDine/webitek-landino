<?php

use App\Http\Controllers\TicketController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\WebsiteController;
use App\Http\Controllers\ProjectDemoController;
use App\Http\Controllers\dashboard\ProjectController as Porject;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => ['install']], function () {
	Route::get('sign_up', 'WebsiteController@sign_up');
	Route::get('site/contactus', 'WebsiteController@contactus');
	Route::get('site/{page}', 'WebsiteController@site');
	Route::post('contact/send_message', 'WebsiteController@send_message');

	Route::get('/terms', 'WebsiteController@terms');
	Route::get('/privacy-policy', 'WebsiteController@privacy_policy');

	Route::get('/pricing', 'WebsiteController@pricing')->name('pricing');
	Route::get('/features', 'WebsiteController@features');

	Route::get('/reset/password', 'WebsiteController@reset');

	Route::get('/email/verify', function () {
		return view('auth.verify-email');
	})->middleware('auth')->name('verification.notice');

	
	// Try Demo 
	Route::prefix('demo')->group(function() {
		Route::get('/', [ProjectDemoController::class, 'demo'])->name('demo.editor');
		Route::get('/builder','ProjectDemoController@larabuilder')->name('demo.builder');
	});

	Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');
    Route::match(['get', 'post'],'register/client_signup','\App\Http\Controllers\Auth\RegisterController@client_signup');

	Route::group(['middleware' => ['auth','verified']], function () {
				
		//Upload image
		Route::post('/api/upload', [UploadController::class, 'uploadImage']);
	    //Get preview pages 
		Route::get('preview/{id}/{project?}/{page?}', [WebsiteController::class, 'preview']);
		//Payment CMI
		Route::get('payments', 'PaymentController@index');
		Route::get('payments/{payment}/download', 'PaymentController@download');
		Route::get('/affiliate', 'AffiliateController@index')->name('affiliate.index');

		Route::any('payment/cmi/process', 'PaymentController@cmi')->name('cmi.proccess');
		Route::any('payment/cmi/success', 'PaymentController@successCmi')->name('cmi.success');
		Route::get('payment/cmi/failed', 'PaymentController@successCmi')->name('cmi.failed');

		Route::middleware(['google.analytics'])->get('/dashboard', 'DashboardController@index')->name('dashboard');

		// Templtes
		Route::get('/templates', 'TemplateController@index');

		Route::get('/affiliate', 'AffiliateController@index')->name('affiliate.index');

		// Tickets
		// Route::get('tickets/create', "TicketController@create");
		// Route::get('tickets/{status?}', "TicketController@index");
		// Route::get('tickets/show/{ticket}', "TicketController@show");
		// Route::get('tickets/{ticket}/update', "TicketController@changestatus");
		// Route::post('tickets/store', "TicketController@store");
		// Route::put('tickets/{ticket}', "TicketController@update");
		// Route::delete('tickets/{ticket}', "TicketController@delete");
		// Route::post('tickets/comments/store/{ticket}', "TicketController@reply");

		// Ticket 
		Route::tickets( TicketController::class );

		//Profile Controller
		Route::get('profile/edit', 'ProfileController@edit');
		Route::post('profile/update', 'ProfileController@update');
		Route::get('profile/change_password', 'ProfileController@change_password');
		Route::post('profile/update_password', 'ProfileController@update_password');
		Route::delete('profile/delete', 'ProfileController@delete_account');


		//Membertship Controller
		Route::get('membership/my_subscription', 'MembershipController@my_subscription');  //View Subscription Details
		Route::get('membership/extend', 'MembershipController@extend');

		//Select Payment Gateway
		Route::post('membership/pay','MembershipController@pay');

		//Payment Gateway PayPal
		Route::get('membership/paypal/{action?}','MembershipController@paypal');

		//Payment Gateway Stripe
		Route::get('membership/stripe_payment/{action}/{payment_id?}','MembershipController@stripe_payment');

		//Payment Gateway RazorPay
		Route::post('membership/razorpay_payment/{payment_id}','MembershipController@razorpay_payment');

		//Paystack Payment Gateway
		Route::get('membership/paystack_payment/{payment_id}/{reference}','MembershipController@paystack_payment');
		
		//Billplz Gateway RazorPay
		Route::post('membership/billplz_payment/{payment_id}','MembershipController@billplz_payment');
		Route::get('membership/billplz_success/{payment_id}','MembershipController@billplz_success');


		Route::get('/template/{template_name}/preview', 'TemplateController@preview')->name('template.preview');

		//Paddle Payment Gateway
		Route::post('membership/Paddle_payment/{payment_id}','MembershipController@Paddle_payment');
		Route::get('membership/Paddle_success/{payment_id}','MembershipController@Paddle_success');
		
 
		/** Admin Only Route **/
		Route::group(['middleware' => ['admin']], function () {
			//User Controller
			Route::get('users/type/{user_type}','UserController@index');
			Route::resource('users','UserController');

	
            //Payment Controller
			Route::get('offline_payment/create','PaymentController@create_offline_payment');
			Route::post('offline_payment/store','PaymentController@store_offline_payment');
			Route::get('members/payment_history','PaymentController@payment_history');

			//Feature Controller
			// Route::resource('features','FeatureController');

			//FAQ Controller
			Route::resource('faqs','FaqController');

			//Package Controller
			Route::resource('packages','PackageController');

			//Language Controller
			Route::resource('languages','LanguageController');

			//Utility Controller
			Route::match(['get', 'post'],'administration/general_settings/{store?}', 'UtilityController@settings');
			Route::match(['get', 'post'],'administration/theme_option/{store?}', 'UtilityController@theme_option');
			Route::post('administration/upload_logo', 'UtilityController@upload_logo');
			Route::match(['get', 'patch'],'administration/currency_rates/{id?}', 'UtilityController@currency_rates');
			Route::get('administration/backup_database', 'UtilityController@backup_database');

			//Theme Option
			// Route::match(['get', 'post'],'administration/theme_option/{store?}', 'UtilityController@theme_option');

			//Email Template
			Route::resource('email_templates','EmailTemplateController')->only([
				'index', 'show', 'edit', 'update'
			]);


			Route::get('/system-update', 'SystemController@getSystemUpdate')->name('system.update');
			Route::post('/system-update', 'SystemController@postSystemUpdate')->name('post.system.update');

		});

		Route::group(['middleware' => ['company']], function () {


			//Project Controller
			Route::post('projects/get_table_data','ProjectController@get_table_data');
			Route::get('/projects', 'ProjectController@index')->name('projects.index');
			Route::get('/projects/create', 'ProjectController@create')->name('projects.create');
			Route::post('/projects/store', 'ProjectController@store');
			Route::get('/projects/{id}/edit', 'ProjectController@edit');
			Route::get('/projects/{id}/editSettings', 'ProjectController@editSettings');
			Route::post('/projects/{id}/update', 'ProjectController@update')->name('projects.update');
			Route::delete('projects/{id}/delete', 'ProjectController@destroy');

			// Route::resource('projects','ProjectController');

			//Builder
			Route::resource('project/builder','BuilderController');
			Route::get('updateproject/builder/{id}','BuilderController@index'); 
			Route::get('project/landino','BuilderController@larabuilder');
			Route::get('builder/novi','BuilderController@novi');
			Route::get('/editor','BuilderController@lara');
			Route::match(['get', 'post'],'api/ajax','BuilderController@ajax');
			Route::get('test/backend/assets/builder','BuilderController@empty');

			Route::post('/img/remove','ProjectController@imgRemove')->name('delete.image');
			Route::post('/video/remove','ProjectController@videoRemove')->name('delete.video');

			//Payment Method
			Route::resource('payment_methods','PaymentMethodController');

			//Staff Controller
			Route::resource('staffs','StaffController');

			//User Roles
			Route::resource('roles','RoleController');

			//File Manager Controller
			Route::get('file_manager/directory/{parent_id}','FileManagerController@index')->name('file_manager.index');
			Route::post('file_manager/store_folder','FileManagerController@store_folder')->name('file_manager.create_folder');
			Route::get('file_manager/create_folder/{parent_id?}','FileManagerController@create_folder')->name('file_manager.create_folder');
			Route::get('file_manager/edit_folder/{id}','FileManagerController@edit_folder')->name('file_manager.edit_folder');
			Route::patch('file_manager/update_folder/{id}','FileManagerController@update_folder')->name('file_manager.edit_folder');
			Route::get('file_manager/create/{parent_id?}','FileManagerController@create')->name('file_manager.create');
			Route::resource('file_manager','FileManagerController');


			//Company Settings Controller
			Route::post('company/upload_logo', 'CompanySettingsController@upload_logo')->name('company.change_logo');
			Route::match(['get', 'post'],'company/general_settings/{store?}', 'CompanySettingsController@settings')->name('company.change_settings');

			Route::match(['get', 'post'],'company/crm_settings', 'CompanySettingsController@crm_settings')->name('company.crm_settings');

			//Company Email Template
			Route::get('company_email_template/get_template/{id}','CompanyEmailTemplateController@get_template');
			Route::resource('company_email_template','CompanyEmailTemplateController');

			//Permission Controller
			Route::get('permission/control/{user_id?}', 'PermissionController@index')->name('permission.manage');
			Route::post('permission/store', 'PermissionController@store')->name('permission.manage');

		});

		Route::group(['middleware' => ['client']], function () {

		    //Projects
		    Route::get('client/projects','ClientController@projects');
			Route::get('client/projects/{id}','ClientController@view_project');

		});


	});



    //Convert Currency
	Route::get('convert_currency/{from}/{to}/{amount}','AccountController@convert_currency');

	//Get Client Info
	// Route::get('contacts/get_client_info/{id}','ContactController@get_client_info');

	//Get Client Info
	Route::get('projects/get_project_info/{id}','ProjectController@get_project_info');

	//View Invoice & Quotation without login
	Route::get('client/view_invoice/{id}','ClientController@view_invoice');

	//Online Invoice Payment
	Route::get('client/invoice_payment/{id}/{payment_method}','ClientController@invoice_payment');

	//Stripe Payment Gateway
	Route::get('client/stripe_payment/{action}/{invoice_id}','ClientController@stripe_payment');

	//PayPal Payment Gateway
	Route::get('client/paypal/{action?}/{invoice_id?}','ClientController@paypal');

	//Payment Gateway RazorPay
	Route::post('client/razorpay_payment/{invoice_id}','ClientController@razorpay_payment');

	//Paystack Payment Gateway
	Route::get('client/paystack_payment/{invoice_id}/{reference}','ClientController@paystack_payment');

	//Invoice & Quotation PDF Download
	Route::get('invoices/download_pdf/{id}','ClientController@download_invoice_pdf');


});


Route::get('/installation', 'Install\InstallController@index');
Route::get('install/database', 'Install\InstallController@database');
Route::post('install/process_install', 'Install\InstallController@process_install');
Route::get('install/create_user', 'Install\InstallController@create_user');
Route::post('install/store_user', 'Install\InstallController@store_user');
Route::get('install/system_settings', 'Install\InstallController@system_settings');
Route::post('install/finish', 'Install\InstallController@final_touch');

//Ajax Select2 Controller
Route::get('ajax/get_table_data','Select2Controller@get_table_data');

Route::post('createProject','ApiController@createProject');
Route::post('updateProject/{id}','ApiController@updateProject');

//Show Notification
Route::get('notification/{id}','NotificationController@show')->middleware('auth');

//Google Login
Route::get('google/redirect', 'Auth\SocialAuthGoogleController@redirect');
Route::get('google/callback', 'Auth\SocialAuthGoogleController@callback');

//Update System
Route::get('migration/update', 'Install\UpdateController@update_migration');

//PayPal IPN for Membership Payment
Route::post('membership/paypal_ipn','MembershipController@paypal_ipn');

//PayPal IPN for Invoice Payment
Route::post('client/paypal_ipn','ClientController@paypal_ipn');

Route::get('console/run','CronJobsController@run');

// Affiliate
Route::get('/s/{affiliate_id}', 'Auth\RegisterController@showRegistrationForm')->name('register.affiliate');
Route::middleware('throttle:2,1')->post('/s/{affiliate_id}', 'Auth\RegisterController@register');

