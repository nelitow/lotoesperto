$(document).ready(function(){
//lotofacil
urlloto = "https://www.lotodicas.com.br/api/lotofacil";
cloto = getUrlVars()["sorteio"];
loto_curr = 0;
loto_late = 0;
jQuery.getJSON(urlloto, {})
  .done(function(data) {
    window.loto_late = data.numero;
    console.log(loto_late);
});
if(cloto)
  lotofacil(cloto);
else {
  jQuery.getJSON(urlloto, {})
    .done(function(data) {
      loto_curr = data.numero;
      lotofacil(data.numero);
  });
}
function lotofacil(n) {
  jQuery.getJSON(urlloto + "/" + n, {})
    .done(function(data) {
      loto_curr = data.numero;
      $('#lotofacil .dia').append(convertDate(data.data));
      $('#lotofacil .numero').append(data.numero);
      $('#lotofacil .acumulado').append(data.valor_acumulado.toLocaleString('pt-BR'));
      for (var n in data.sorteio) {
        $("#lotofacil .card-text").append("<span class='sorteio'>" + data.sorteio[n] + "</span>");
      }
      for (var m in data.ganhadores) {
        var i = 15 - m;
        $("#lotofacil .ganhadores").append(i + " números: " + data.ganhadores[m] + " ganharam R$ " + data.rateio[m].toLocaleString('pt-BR') + "<br>");
      }
    });
}
$("#prev").click(function(){
  lotoPrev();
});
function lotoPrev() {
  window.location.href = (window.location.href.split('?')[0] + "?sorteio=" + (loto_curr-1));
}
$("#next").click(function(){
  if(window.loto_late == loto_curr) {
    Swal.fire({
      type: 'error',
      title: 'Ops...',
      text: 'Ainda nao saiu o próximo resultado!'
    });
    return;
  }
  lotoNext();
});

function lotoNext() {
  window.location.href = (window.location.href.split('?')[0] + "?sorteio=" + (loto_curr+1));
}
});
