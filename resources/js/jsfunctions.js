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
