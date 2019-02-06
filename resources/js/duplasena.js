$(document).ready(function(){
//duplasena
urlduplasena = "https://www.lotodicas.com.br/api/dupla-sena";
cduplasena = getUrlVars()["sorteio"];
duplasena_curr = 0;
duplasena_late = 0;
jQuery.getJSON(urlduplasena, {})
  .done(function(data) {
    window.duplasena_late = data.numero;
    console.log(duplasena_late);
});
if(cduplasena)
  duplasena(cduplasena);
else {
  jQuery.getJSON(urlduplasena, {})
    .done(function(data) {
      duplasena_curr = data.numero;
      duplasena(data.numero);
  });
}
function duplasena(n) {
  jQuery.getJSON(urlduplasena + "/" + n, {})
    .done(function(data) {
      duplasena_curr = data.numero;
      $('#dupla-sena .dia').append(convertDate(data.data));
      $('#dupla-sena .numero').append(data.numero);
      $('#dupla-sena .acumulado').append(data.valor_acumulado.toLocaleString('pt-BR'));
      $("#dupla-sena .card-text").append("Sorteio 1:<br>");
      for (var n in data.sorteio[0]) {
        $("#dupla-sena .card-text").append("<span class='sorteio'>" + data.sorteio[0][n] + "</span>");
      }
      $("#dupla-sena .card-text").append("<br>Sorteio 2:<br>");
      for (var n in data.sorteio[1]) {
        $("#dupla-sena .card-text").append("<span class='sorteio'>" + data.sorteio[1][n] + "</span>");
      }
      $("#dupla-sena .ganhadores").append("Ganhadores sorteio 1:<br>");
      for (var m in data.ganhadores[0]) {
        var i = 6 - m;
        $("#dupla-sena .ganhadores").append(i + " números: " + data.ganhadores[0][m] + " ganharam R$ " + data.rateio[0][m].toLocaleString('pt-BR') + "<br>");
      }
      $("#dupla-sena .ganhadores").append("Ganhadores sorteio 2:<br>");
      for (var m in data.ganhadores[1]) {
        var i = 6 - m;
        $("#dupla-sena .ganhadores").append(i + " números: " + data.ganhadores[1][m] + " ganharam R$ " + data.rateio[1][m].toLocaleString('pt-BR') + "<br>");
      }
    });
}
$("#prev").click(function(){
  duplasenaPrev();
});
function duplasenaPrev() {
  window.location.href = (window.location.href.split('?')[0] + "?sorteio=" + (duplasena_curr-1));
}
$("#next").click(function(){
  if(window.duplasena_late == duplasena_curr) {
    Swal.fire({
      type: 'error',
      title: 'Ops...',
      text: 'Ainda nao saiu o próximo resultado!'
    });
    return;
  }
  duplasenaNext();
});

function duplasenaNext() {
  window.location.href = (window.location.href.split('?')[0] + "?sorteio=" + (duplasena_curr+1));
}
});
