$(document).ready(function(){
//timemania
urltimemania = "https://www.lotodicas.com.br/api/timemania";
ctimemania = new URL(window.location.href).searchParams.get("sorteio");
timemania_curr = 0;
timemania_late = 0;
jQuery.getJSON(urltimemania, {})
  .done(function(data) {
    window.timemania_late = data.numero;
    console.log(timemania_late);
});
if(ctimemania)
  timemania(ctimemania);
else {
  jQuery.getJSON(urltimemania, {})
    .done(function(data) {
      timemania_curr = data.numero;
      timemania(data.numero);
  });
}
function timemania(n) {
  jQuery.getJSON(urltimemania + "/" + n, {})
    .done(function(data) {
      timemania_curr = data.numero;
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
$("#prev").click(function(){
  timemaniaPrev();
});
function timemaniaPrev() {
  window.location.href = (window.location.href.split('?')[0] + "?sorteio=" + (timemania_curr-1));
}
$("#next").click(function(){
  if(window.timemania_late == timemania_curr) {
    Swal.fire({
      type: 'error',
      title: 'Ops...',
      text: 'Ainda nao saiu o próximo resultado!'
    });
    return;
  }
  timemaniaNext();
});

function timemaniaNext() {
  window.location.href = (window.location.href.split('?')[0] + "?sorteio=" + (timemania_curr+1));
}

function convertDate(date) {
  var date_arr = date.split("-");
  return date_arr[2] + "/" + date_arr[1] + "/" + date_arr[0];
}
});
