document.onload = function(){
  var sizeERROR = document.getElementsByClassName('status_error').length;
  var sizeOK = document.getElementsByClassName('status_correct').length;

  for(i=0, j=0; i<sizeERROR, j<sizeOK; i++, j++){
    document.getElementsByClassName('status_error')[i].value = "ERROR";
    document.getElementsByClassName('status_correct')[j].value = "OK";
  }
}
