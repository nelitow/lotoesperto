$(document).ready(function(){
//quina
urlquina = "https://www.lotodicas.com.br/api/quina";
cquina = new URL(window.location.href).searchParams.get("sorteio");
quina_curr = 0;
quina_late = 0;
jQuery.getJSON(urlquina, {})
  .done(function(data) {
    window.quina_late = data.numero;
    console.log(quina_late);
});
if(cquina)
  quina(cquina);
else {
  jQuery.getJSON(urlquina, {})
    .done(function(data) {
      quina_curr = data.numero;
      quina(data.numero);
  });
}
function quina(n) {
  jQuery.getJSON(urlquina + "/" + n, {})
    .done(function(data) {
      quina_curr = data.numero;
      $('#quina .dia').append(convertDate(data.data));
      $('#quina .numero').append(data.numero);
      $('#quina .acumulado').append(data.valor_acumulado.toLocaleString('pt-BR'));
      for (var n in data.sorteio) {
        $("#quina .card-text").append("<span class='sorteio'>" + data.sorteio[n] + "</span>");
      }
      for (var m in data.ganhadores) {
        var i = 5 - m;
        $("#quina .ganhadores").append(i + " números: " + data.ganhadores[m] + " ganharam R$ " + data.rateio[m].toLocaleString('pt-BR') + "<br>");
      }
    });
}
$("#prev").click(function(){
  quinaPrev();
});
function quinaPrev() {
  window.location.href = (window.location.href.split('?')[0] + "?sorteio=" + (quina_curr-1));
}
$("#next").click(function(){
  if(window.quina_late == quina_curr) {
    Swal.fire({
      type: 'error',
      title: 'Ops...',
      text: 'Ainda nao saiu o próximo resultado!'
    });
    return;
  }
  quinaNext();
});

function quinaNext() {
  window.location.href = (window.location.href.split('?')[0] + "?sorteio=" + (quina_curr+1));
}

function convertDate(date) {
  var date_arr = date.split("-");
  return date_arr[2] + "/" + date_arr[1] + "/" + date_arr[0];
}
});
