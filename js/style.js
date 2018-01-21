window.onload = loadPage;


function loadPage(){
  menuObject = document.getElementById('showMenuIMG');
  //document.getElementById('menuContent').style.display = 'none';
  
  menuObject.onclick = changeManuDisplay;
}

function changeManuDisplay(){
  state = document.getElementById('menuContent').style.display;
  
  state = (state == 'none') ? 'inline-block' : 'none';
    
  document.getElementById('menuContent').style.display = state;
}
