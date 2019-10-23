$(document).ready(function(){
  //megasena
  var url = "https://www.lotodicas.com.br/api/mega-sena";
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
        $('#megasena .dia').append(convertDate(data.data));
        $('#megasena .numero').text(data.numero);
        $("#prev a").attr("href", "./" + (data.numero - 1));
        $("#next a").attr("href", "./" + (data.numero + 1));
        $('#megasena .acumulado').append(data.valor_acumulado).toLocaleString('pt-BR');
        for (var n in data.sorteio)
          $("#megasena .card-text").append("<span class='sorteio'>" + data.sorteio[n] + "</span>");
        for (var m in data.ganhadores) {
          var i = 5 - m;
          $("#megasena .ganhadores").append(i + " números: " + data.ganhadores[m] + " ganharam R$ " + data.rateio[m].toLocaleString('pt-BR') + "<br>");
        }
      });
  }

});
