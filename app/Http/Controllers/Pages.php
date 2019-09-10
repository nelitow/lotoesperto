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
    public function megasenaSingle($sorteio) {
      return view('megasena')->with('sorteio', $sorteio);
    }
    public function lotofacil() {
      return view('lotofacil');
    }
    public function lotofacilSingle($sorteio) {
      return view('lotofacil')->with('sorteio', $sorteio);
    }
    public function quina() {
      return view('quina');
    }
    public function quinaSingle($sorteio) {
      return view('quina')->with('quina', $sorteio);
    }
    public function timemania() {
      return view('timemania');
    }
    public function timemaniaSingle($sorteio) {
      return view('timemania')->with('timemania', $sorteio);
    }
    public function lotomania() {
      return view('lotomania');
    }
    public function lotomaniaSingle($sorteio) {
      return view('lotomania')->with('lotomania', $sorteio);
    }
    public function duplasena() {
      return view('duplasena');
    }
    public function duplasenaSingle($sorteio) {
      return view('duplasena')->with('duplasena', $sorteio);
    }
}
