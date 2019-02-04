<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Pages extends Controller
{
    public function index() {
      return view('index');
    }
    public function megasena() {
      return view('megasena');
    }
    public function lotofacil() {
      return view('lotofacil');
    }
    public function quina() {
      return view('quina');
    }
    public function timemania() {
      return view('timemania');
    }
    public function lotomania() {
      return view('lotomania');
    }
    public function duplasena() {
      return view('duplasena');
    }
}
