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
Route::get('/megasena/{sorteio}', 'Pages@megasenaSingle');
Route::get('/lotofacil', 'Pages@lotofacil');
Route::get('/lotofacil/{sorteio}', 'Pages@lotofacilSingle');
Route::get('/quina', 'Pages@quina');
Route::get('/quina/{sorteio}', 'Pages@quinaSingle');
Route::get('/timemania', 'Pages@timemania');
Route::get('/timemania/{sorteio}', 'Pages@timemaniaSingle');
Route::get('/lotomania', 'Pages@lotomania');
Route::get('/lotomania/{sorteio}', 'Pages@lotomaniaSingle');
Route::get('/duplasena', 'Pages@duplasena');
Route::get('/duplasena/{sorteio}', 'Pages@duplasenaSingle');
