$(document).ready(function(){
//megasena
var urlmega = "https://www.lotodicas.com.br/api/megasena";
var cmega = new URL(window.location.href).searchParams.get("sorteio");
var mega_curr = 0;
var mega_late = 0;
jQuery.getJSON(urlmega, {})
  .done(function(data) {
    window.mega_late = data.numero;
    console.log(mega_late);
});
if(cmega)
  megasena(cmega);
else {
  jQuery.getJSON(urlmega, {})
    .done(function(data) {
      mega_curr = data.numero;
      megasena(data.numero);
  });
}
function megasena(n) {
  jQuery.getJSON(urlmega + "/" + n, {})
    .done(function(data) {
      mega_curr = data.numero;
      $('#megasena .dia').append(convertDate(data.data));
      $('#megasena .numero').append(data.numero);
      $('#megasena .acumulado').append(data.valor_acumulado).toLocaleString('pt-BR');
      for (var n in data.sorteio)
        $("#megasena .card-text").append("<span class='sorteio'>" + data.sorteio[n] + "</span>");
      for (var m in data.ganhadores) {
        var i = 5 - m;
        $("#megasena .ganhadores").append(i + " números: " + data.ganhadores[m] + " ganharam R$ " + data.rateio[m].toLocaleString('pt-BR') + "<br>");
      }
    });
}
$("#prev").click(function(){
  megaPrev();
});
function megaPrev() {
  window.location.href = (window.location.href.split('?')[0] + "?sorteio=" + (mega_curr-1));
}
$("#next").click(function(){
  if(window.mega_late == mega_curr) {
    Swal.fire({
      type: 'error',
      title: 'Ops...',
      text: 'Ainda nao saiu o próximo resultado!'
    });
    return;
  }
  megaNext();
});

function megaNext() {
  window.location.href = (window.location.href.split('?')[0] + "?sorteio=" + (mega_curr+1));
}

function convertDate(date) {
  var date_arr = date.split("-");
  return date_arr[2] + "/" + date_arr[1] + "/" + date_arr[0];
}
});
