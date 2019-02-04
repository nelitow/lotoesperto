<?php

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

Route::get('/', 'Pages@index');
Route::get('/megasena', 'Pages@megasena');
Route::get('/lotofacil', 'Pages@lotofacil');
Route::get('/quina', 'Pages@quina');
Route::get('/timemania', 'Pages@timemania');
Route::get('/lotomania', 'Pages@lotomania');
Route::get('/duplasena', 'Pages@duplasena');
