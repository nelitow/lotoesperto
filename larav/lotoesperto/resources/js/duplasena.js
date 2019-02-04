$(document).ready(function(){
//dupla-sena
var url = "https://www.lotodicas.com.br/api/dupla-sena";
jQuery.getJSON(url, {})
  .done(function(data) {

    $('#dupla-sena .dia').append(convertDate(data.data));
    $('#dupla-sena .numero').append(data.numero);
    $('#dupla-sena .acumulado').append(data.valor_acumulado);
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
      $("#dupla-sena .ganhadores").append(i + " números: " + data.ganhadores[0][m] + " ganharam R$ " + data.rateio[0][m] + "<br>");
    }
		$("#dupla-sena .ganhadores").append("Ganhadores sorteio 2:<br>");
    for (var m in data.ganhadores[1]) {
      var i = 6 - m;
      $("#dupla-sena .ganhadores").append(i + " números: " + data.ganhadores[1][m] + " ganharam R$ " + data.rateio[1][m] + "<br>");
    }
  });

function convertDate(date) {
  var date_arr = date.split("-");
  return date_arr[2] + "/" + date_arr[1] + "/" + date_arr[0];
}
});
