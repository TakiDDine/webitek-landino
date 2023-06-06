<?php

use Illuminate\Http\Request;
use App\Http\Controllers\GoogleSheetsController;
use App\Http\Controllers\dashboard\ProjectController;
use App\Http\Controllers\dashboard\CategoryController;
use App\Http\Controllers\dashboard\TemplateController;

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
 * Categoty api 
 */

Route::post('category', [CategoryController::class, 'store']);
Route::put('category/{category}', [CategoryController::class, 'update']);
Route::get('categories', [CategoryController::class, 'index']);



 
/**
 * Project routes
 */
Route::get('/projects', [ProjectController::class, 'index']);
Route::delete('/project/{id}', [ProjectController::class, 'destroy']); 
Route::put('/project/{project}', [ProjectController::class, 'updateName']);
Route::post('/project/search', [ProjectController::class, 'search']);
Route::post('/duplicate/{project}', [ProjectController::class, 'duplicate']);
Route::get('/archive', [ProjectController::class, 'archive']);

/**
 * Template routes
 */

Route::get('templates', [TemplateController::class, 'index']);
Route::post('template', [TemplateController::class, 'store']);
Route::put('template/{template}', [TemplateController::class, 'update']);
Route::put('favorite/{template}', [TemplateController::class, 'favorite']);
Route::get('favorites', [TemplateController::class, 'favorites']);


