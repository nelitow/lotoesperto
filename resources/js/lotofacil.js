$(document).ready(function(){
//lotofacil
var url = "https://www.lotodicas.com.br/api/lotofacil";
jQuery.getJSON(url, {})
  .done(function(data) {
    console.log(data);
    $('#lotofacil .dia').append(convertDate(data.data));
    $('#lotofacil .numero').append(data.numero);
    $('#lotofacil .acumulado').append(data.valor_acumulado);
    for (var n in data.sorteio) {
      $("#lotofacil .card-text").append("<span class='sorteio'>" + data.sorteio[n] + "</span>");
    }
    for (var m in data.ganhadores) {
      var i = 15 - m;
      $("#lotofacil .ganhadores").append(i + " números: " + data.ganhadores[m] + " ganharam R$ " + data.rateio[m] + "<br>");
    }
  });

function convertDate(date) {
  var date_arr = date.split("-");
  return date_arr[2] + "/" + date_arr[1] + "/" + date_arr[0];
}
});
