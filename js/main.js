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
  //mega-sena
  var url = "https://www.lotodicas.com.br/api/mega-sena";
  jQuery.getJSON(url, {})
    .done(function(data) {
      $('#mega-sena .dia').append(convertDate(data.data));
      $('#mega-sena .numero').append(data.numero);
      $('#mega-sena .acumulado').append(data.valor_acumulado);
      for (var n in data.sorteio) {
        $("#mega-sena .card-text").append("<span class='sorteio'>" + data.sorteio[n] + "</span>");
      }
      for (var m in data.ganhadores) {
        var i = 5 - m;
        $("#mega-sena .ganhadores").append(i + " números: " + data.ganhadores[m] + " ganharam R$ " + data.rateio[m] + "<br>");
      }
    });
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

	//timemania
	var url = "https://www.lotodicas.com.br/api/timemania";
jQuery.getJSON(url, {})
  .done(function(datat) {
    $('#timemania .dia').append(convertDate(datat.data));
    $('#timemania .numero').append(datat.numero);
    $('#timemania .acumulado').append(datat.valor_acumulado);
		$('#timemania .time').append(datat.time+"<br>");
    for (var n in datat.sorteio) {
      $("#timemania .card-text").append("<span class='sorteio'>" + datat.sorteio[n] + "</span>");
    }
    for (var m in datat.ganhadores) {
      var i = 7 - m;
			if (m != 5)
      	$("#timemania .ganhadores").append(i + " números: " + datat.ganhadores[m] + " ganharam R$ " + datat.rateio[m] + "<br>");
			else
				$("#timemania .ganhadores").append(" Time do Coração: " + datat.ganhadores[m] + " ganharam R$ " + datat.rateio[m] + "<br>");
    }
  });

function convertDate(date) {
  var date_arr = date.split("-");
  return date_arr[2] + "/" + date_arr[1] + "/" + date_arr[0];
}
