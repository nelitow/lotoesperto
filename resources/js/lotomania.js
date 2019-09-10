$(document).ready(function(){
//lotomania
var url = "https://www.lotodicas.com.br/api/lotomania";
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
      current = data.numero;
      $('#lotomania .dia').append(convertDate(data.data));
      $('#lotomania .numero').text(data.numero);
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
});
