$(document).ready(function(){
//lotomania
var url = "https://www.lotodicas.com.br/api/lotomania";
jQuery.getJSON(url, {})
  .done(function(data) {

    $('#lotomania .dia').append(convertDate(data.data));
    $('#lotomania .numero').append(data.numero);
    $('#lotomania .acumulado').append(data.valor_acumulado);
    for (var n in data.sorteio) {
      $("#lotomania .card-text").append("<span class='sorteio'>" + data.sorteio[n] + "</span>");
    }
    for (var m in data.ganhadores) {
      var i = 20 - m;
      if (m != 6)
        $("#lotomania .ganhadores").append(i + " números: " + data.ganhadores[m] + " ganharam R$ " + data.rateio[m] + "<br>");
      else
        $("#lotomania .ganhadores").append("Nenhum número: " + data.ganhadores[m] + " acertadores<br>");
    }
  });

function convertDate(date) {
  var date_arr = date.split("-");
  return date_arr[2] + "/" + date_arr[1] + "/" + date_arr[0];
}
});
