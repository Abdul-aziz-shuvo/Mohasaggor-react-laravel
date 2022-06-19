<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('fetch-category',[\App\Http\Controllers\CategoryController::class,'fetchCategory']);
Route::get('fetch-sub-category/{id}',[\App\Http\Controllers\CategoryController::class,'fetchSubCategory']);
Route::get('fetch-sub-sub-category/{id}',[\App\Http\Controllers\CategoryController::class,'fetchSubSubCategory']);
Route::get('fetch-color',[\App\Http\Controllers\VariantController::class,'fetchColor']);
Route::get('fetch-size',[\App\Http\Controllers\VariantController::class,'fetchSize']);
Route::post('add-product',[\App\Http\Controllers\ProductController::class,'store']);
Route::get('products',[\App\Http\Controllers\ProductController::class,'productList']);
Route::get('product/{id}',[\App\Http\Controllers\ProductController::class,'show']);
