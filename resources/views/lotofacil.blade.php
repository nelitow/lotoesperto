@extends('layouts.site')
@section('content')
  <div class="app-main__inner">
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="fa fa-dice icon-gradient bg-mean-fruit">
                                </i>
          </div>
          <div>
            <div class="">
              "A quantidade de boa sorte em seu caminho depende da sua disposição para agir." <small> - Barba Sher</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card mb-3 widget-content">
          <div class="widget-content-wrapper">
            <div class="" id="lotofacil">
              <h1 class="">Lotofácil - <span class="numero"></span></h1>
              <p class="card-text h3">
                <span class="acumulado">Acumulado: R$ </span><br>
                <span class="dezenas"></span>
                <span class="ganhadores"></span>
              </p>
              <span class="dia">Dia: </span><br>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <a target="_blank" class="btn btn-primary text-center bg-happy-green border-0" href="/loto-expert">Melhore suas apostas na Lotofácil</a>
      </div>
    </div>
  </div>
<script type="text/javascript" src="{{asset('js/lotofacil.js')}}"></script>
@endsection
