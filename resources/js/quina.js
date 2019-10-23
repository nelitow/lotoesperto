$(document).ready(function(){
//quina
var url = "https://www.lotodicas.com.br/api/quina";
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
      if(!data)Swal.fire({type: 'error',title: 'Ops...',text: 'Resultado ainda não disponível!'});
      $("#prev a").attr("href", "./" + (data.numero - 1));
      $("#next a").attr("href", "./" + (data.numero + 1));
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

});
