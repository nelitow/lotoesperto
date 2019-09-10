$(document).ready(function(){
//timemania
var url = "https://www.lotodicas.com.br/api/timemania";
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
      $('#timemania .dia').append(convertDate(data.data));
      $('#timemania .numero').append(data.numero);
      $('#timemania .acumulado').append(data.valor_acumulado.toLocaleString('pt-BR'));
      $('#timemania .time').append(data.time+"<br>");
      for (var n in data.sorteio) {
        $("#timemania .card-text").append("<span class='sorteio'>" + data.sorteio[n] + "</span>");
      }
      for (var m in data.ganhadores) {
        var i = 7 - m;
        if (m != 5)
          $("#timemania .ganhadores").append(i + " números: " + data.ganhadores[m] + " ganharam R$ " + data.rateio[m].toLocaleString('pt-BR') + "<br>");
        else
          $("#timemania .ganhadores").append(" Time do Coração: " + data.ganhadores[m] + " ganharam R$ " + data.rateio[m].toLocaleString('pt-BR') + "<br>");
      }
    });
}

});
