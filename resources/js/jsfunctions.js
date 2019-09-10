url = window.location.href;
function convertDate(date) {
  var date_arr = date.split("-");
  return date_arr[2] + "/" + date_arr[1] + "/" + date_arr[0];
}

function getLastUrlParam(){
  last = url.substring(url.lastIndexOf('/') + 1);
  if(last == "" || isNaN(last))
    return 0;
  else {
    return last;
  }
}

function Next() {
  if(getLastUrlParam() == 0)
    Swal.fire({type: 'error',title: 'Ops...',text: 'Ainda nao saiu o próximo resultado!'});
  else
    window.location.href = url.replace(getLastUrlParam(), Number(getLastUrlParam()) + 1);
}
function Prev(current) {
  if(getLastUrlParam() == 0)
    window.location.href = url + (Number(current) - 1);
  else {
    sorteio = Number(getLastUrlParam());
    window.location.href = url.replace(sorteio, sorteio - 1);
  }
}

function convertDate(date) {
  var date_arr = date.split("-");
  return date_arr[2] + "/" + date_arr[1] + "/" + date_arr[0];
}


$(document).ready(function(){
  //Comportamento dos botoes proximo e anterior
  $("#prev").click(function(){
    Prev($('.numero').text());
  });

  $("#next").click(function(){
    Next();
  });
  if(typeof current == 'undefined')
    current = window.late;
});
