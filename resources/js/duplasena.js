$(document).ready(function(){
//duplasena
url = "https://www.lotodicas.com.br/api/dupla-sena";
window.atual = getLastUrlParam(); //Pega o numero da url
if (window.atual == 0) //Se nao tiver, atual é o ultimo sorteio
  jQuery.getJSON(url, {})
    .done(function(data) {
      window.atual = data.numero;
      getData(window.atual);
  });
else
  getData(window.atual);

function getData(n) {
  jQuery.getJSON(url + "/" + n, {})
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
});
