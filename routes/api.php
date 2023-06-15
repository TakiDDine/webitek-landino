<?php

use Illuminate\Http\Request;
use App\Http\Controllers\GoogleSheetsController;
use App\Http\Controllers\dashboard\ProfileController;
use App\Http\Controllers\dashboard\ProjectController;
use App\Http\Controllers\dashboard\CategoryController;
use App\Http\Controllers\dashboard\TemplateController;
use App\Http\Controllers\dashboard\Auth\AuthController;
use App\Http\Controllers\dashboard\SubscriptionController;
use App\Http\Controllers\dashboard\SubscriptionPlanController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('throttle:20,1')->post('/addsheet', [GoogleSheetsController::class, 'index']);


 /**
  * regiseter, login, logout
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:api'])->group(function() {

    //logout
    Route::post('/dashbord/logout', [AuthController::class, 'logout']);
});

// Routes accessible to admins only
Route::middleware('admin')->group(function () {
    // Add your admin-specific routes here
});


// Routes accessible to users only
Route::middleware('user')->group(function () {
    // Add your user-specific routes here

});
/**
 * Categoty api 
 */

Route::post('category', [CategoryController::class, 'store']);
Route::put('category/{category}', [CategoryController::class, 'update']);
Route::get('categories', [CategoryController::class, 'index']);



 
/**
 * Project routes
 */
Route::get('/projects', [ProjectController::class, 'index']);
Route::delete('/project/{project}', [ProjectController::class, 'destroy']); 
Route::put('/project/{project}', [ProjectController::class, 'updateName']);
Route::post('/project/search', [ProjectController::class, 'search']);
Route::post('/duplicate/{project}', [ProjectController::class, 'duplicate']);
Route::get('/archive', [ProjectController::class, 'archive']);

/**
 * Template routes
 */

Route::get('templates', [TemplateController::class, 'index']);
Route::get('templates1', [TemplateController::class, 'index1']);
Route::post('template', [TemplateController::class, 'store']);
Route::put('template/{template}', [TemplateController::class, 'update']);
Route::put('favorite/{template}', [TemplateController::class, 'favorite']);
Route::get('favorites', [TemplateController::class, 'favorites']);

/**
 * User profile
 */
Route::get('profile', [ProfileController::class, 'show']);
Route::put('profile/update-account', [ProfileController::class, 'updateAccount']);
Route::put('profile/update-password', [ProfileController::class, 'updatePassword']);

/**
 * Subscription plan 
 */
 Route::get('/plans', [SubscriptionPlanController::class, 'index']);
 Route::post('/plans', [SubscriptionPlanController::class, 'store']);
 Route::put('/plans/{subscriptionPlan}', [SubscriptionPlanController::class, 'update']);
 Route::post('/subscribe', [SubscriptionController::class, 'store']);
 Route::delete('/plans/{subscriptionPlan}', [SubscriptionPlanController::class, 'destroy']);