$(document).ready(function(){
//lotomania
urllotomania = "https://www.lotodicas.com.br/api/lotomania";
clotomania = new URL(window.location.href).searchParams.get("sorteio");
lotomania_curr = 0;
lotomania_late = 0;
jQuery.getJSON(urllotomania, {})
  .done(function(data) {
    window.lotomania_late = data.numero;
    console.log(lotomania_late);
});
if(clotomania)
  lotomania(clotomania);
else {
  jQuery.getJSON(urllotomania, {})
    .done(function(data) {
      lotomania_curr = data.numero;
      lotomania(data.numero);
  });
}
function lotomania(n) {
  jQuery.getJSON(urllotomania + "/" + n, {})
    .done(function(data) {
      lotomania_curr = data.numero;
      $('#lotomania .dia').append(convertDate(data.data));
      $('#lotomania .numero').append(data.numero);
      $('#lotomania .acumulado').append(data.valor_acumulado.toLocaleString('pt-BR'));
      for (var n in data.sorteio) {
        $("#lotomania .card-text").append("<span class='sorteio'>" + data.sorteio[n] + "</span>");
      }
      for (var m in data.ganhadores) {
        var i = 20 - m;
        if (m != 6)
          $("#lotomania .ganhadores").append(i + " números: " + data.ganhadores[m] + " ganharam R$ " + data.rateio[m].toLocaleString('pt-BR') + "<br>");
        else
          $("#lotomania .ganhadores").append("Nenhum número: " + data.ganhadores[m] + " acertadores<br>");
      }
    });
}
$("#prev").click(function(){
  lotomaniaPrev();
});
function lotomaniaPrev() {
  window.location.href = (window.location.href.split('?')[0] + "?sorteio=" + (lotomania_curr-1));
}
$("#next").click(function(){
  if(window.lotomania_late == lotomania_curr) {
    Swal.fire({
      type: 'error',
      title: 'Ops...',
      text: 'Ainda nao saiu o próximo resultado!'
    });
    return;
  }
  lotomaniaNext();
});

function lotomaniaNext() {
  window.location.href = (window.location.href.split('?')[0] + "?sorteio=" + (lotomania_curr+1));
}

function convertDate(date) {
  var date_arr = date.split("-");
  return date_arr[2] + "/" + date_arr[1] + "/" + date_arr[0];
}
});
