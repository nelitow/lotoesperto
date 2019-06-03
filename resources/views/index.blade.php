@extends('layouts.site')
@section('content')
  <div class="app-main__inner">
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
      <div class="col-sm-12 col-md-6">
        <div class="card mb-3 widget-content bg-grow-early">
          <div class="widget-content-wrapper text-white">
            <div class="" id="mega-sena">
              <a class="h2" href="/megasena">Mega-sena - <span class="numero"></span></a>
              <p class="card-text">
                <span class="acumulado">Acumulado: R$ </span><br>
                <span class="dezenas"></span>
                <span class="ganhadores"></span>
              </p>
              <span class="dia">Dia: </span><br>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="card mb-3 widget-content bg-midnight-bloom">
          <div class="widget-content-wrapper text-white">
            <div class="" id="quina">
              <a class="h2" href="/quina">Quina - <span class="numero"></span></a>
              <p class="card-text">
                <span class="acumulado">Acumulado: R$ </span><br>
                <span class="dezenas"></span>
                <span class="ganhadores"></span>
              </p>
              <span class="dia">Dia: </span><br>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="card mb-3 widget-content bg-love-kiss">
          <div class="widget-content-wrapper text-white">
            <div class="" id="lotofacil">
              <a class="h2" href="/lotofacil">Lotofácil - <span class="numero"></span></a>
              <p class="card-text">
                <span class="acumulado">Acumulado: R$ </span><br>
                <span class="dezenas"></span>
                <span class="ganhadores"></span>
              </p>
              <span class="dia">Dia: </span><br>
              <a target="_blank" class="btn btn-primary text-center d-block bg-happy-green border-0" href="/loto-expert">
                Melhore suas apostas na Lotofácil
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6">
        <div class="card mb-3 widget-content bg-happy-itmeo">
          <div class="widget-content-wrapper text-white">
            <div class="" id="timemania">
              <a class="h2" href="/timemania">Timemania - <span class="numero"></span></a>
              <p class="card-text">
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
      <div class="col-sm-12 col-md-6">
        <div class="card mb-3 widget-content bg-strong-bliss">
          <div class="widget-content-wrapper text-white">
            <div class="" id="lotomania">
              <a class="h2" href="/lotomania">Lotomania - <span class="numero"></span></a>
              <p class="card-text">
                <span class="acumulado">Acumulado: R$ </span><br>
                <span class="dezenas"></span>
                <span class="ganhadores"></span>
              </p>
              <span class="dia">Dia: </span><br>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="card mb-3 widget-content bg-grow-early">
          <div class="widget-content-wrapper text-white">
            <div class="" id="dupla-sena">
              <a class="h2" href="/duplasena">Dupla-sena - <span class="numero"></span></a>
              <p class="card-text">
                <span class="acumulado">Acumulado: R$ </span><br>
                <span class="dezenas"></span>
                <span class="ganhadores"></span>
              </p>
              <span class="dia">Dia: </span><br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script type="text/javascript" src="{{asset('js/home.js')}}"></script>
@endsection
