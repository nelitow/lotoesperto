@extends('layouts.site')
@section('content')
  <div class="row my-3">
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="fa fa-dice icon-gradient bg-mean-fruit">
                                </i>
          </div>
          <div>
            <div class="">
              "Diligência é a mãe da boa sorte." <small> - Benjamin Franklin</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="row">
      <div class="col-12 pb-2 text-center">
        <a href="https://go.hotmart.com/L11280144G" target="_blank"><img src="/images/banner-aposte-melhor.gif" width="100%" style="max-width: 600px;"/></a>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card mb-3 widget-content">
          <div class="widget-content-wrapper">
            <div class="" id="timemania">
              <h1 class="h2">Timemania - <span class="numero">{{$sorteio ?? ""}}</span></h1>
              <p class="card-text h3">
                <span class="acumulado">Acumulado: R$ </span><br>
                <span class="dezenas"></span>
                <span class="ganhadores"></span>
                <span class="time">Time: </span>
              </p>
              <span class="dia">Dia: </span><br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-6 pointer ">
        <div class="mx-auto" id="prev">
            <a href="">
              <i class="fa fa-angle-left icon-gradient h1 bg-happy-green m-0"></i>
              <p>
                Anterior
              </p>
            </a>
        </div>
      </div>
      <div class="col-6 pointer" id="next">
        <div class="mx-auto">
          <a href="">
            <i class="fa fa-angle-right icon-gradient h1 bg-happy-green m-0"></i>
            <p>
              Proximo
            </p>
          </a>
        </div>
      </div>
    </div>
<script type="text/javascript" src="{{asset('js/timemania.js')}}"></script>
@endsection
