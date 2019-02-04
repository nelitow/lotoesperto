$(document).ready(function(){
var url = "https://www.lotodicas.com.br/api/quina";
jQuery.getJSON(url, {})
  .done(function(data) {
    $('#quina .dia').append(convertDate(data.data));
    $('#quina .numero').append(data.numero);
    $('#quina .acumulado').append(data.valor_acumulado);
    for (var n in data.sorteio) {
      $("#quina .card-text").append("<span class='sorteio'>" + data.sorteio[n] + "</span>");
    }
    for (var m in data.ganhadores) {
      var i = 5 - m;
      $("#quina .ganhadores").append(i + " números: " + data.ganhadores[m] + " ganharam R$ " + data.rateio[m] + "<br>");
    }
  });

function convertDate(date) {
  var date_arr = date.split("-");
  return date_arr[2] + "/" + date_arr[1] + "/" + date_arr[0];
}
});
