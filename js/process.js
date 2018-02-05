/*
# ************************************ #
# PROCESS.JS
# 
# This script is used to makes all
# DOM interaction between PHP and HTML 
#
# It uses the bases of PHP Class 'HTMLObject'
# to make a better and standardize connection
#
# METHODS
# [$] get_data()
# [$] set_offset()
# [$] set_offset_value()
# [$] set_general_variables()
#
# GENERAL USE VARIABLES
# [$] graph_data
# [$] offset_x
# [$] offset_y
# [$] offset_y
# [$] svg_graph
# [$] svg_width
# [$] svg_height
# [$] svg_namespace
# --- SVG.JS
# [$] lineX
# [$] lineY
# [$] line_offset_x
# [$] line_offset_y
# 
# ************************************ #
# This tool is licensed under GPL terms.
#
# Be free to:
# [+] run
# [+] study
# [+] change
# [+] improve
# [+] redistribute
# [+] share
# [+] and whatever you want to!
#
# But never forget to keep it free!
#
# 'When we speak of free software,
# we are referring to freedom, not
# price.'
# __ Gnu Public License 3.0 Preamble
# 
# ************************************ #
# ******* @hudsonUriel
# ******* OCT-2017
# *******  Lamniscata_Systems_#001 
# ************************************ #
#
*/

// shows the channel area
function shows_confirm(){
  document.getElementById('confirmChannel').style.display = 'block';
}

// confirms the number of channels
function confirm_channels(){
  // gets the number of channels
  channels = document.getElementById('channelNumber').value;
  
  // changes the display of #channelChoice to none
  document.getElementById('channelChoice').style.display = 'none';
  
  // changes the display of #choiceTask to block
  document.getElementById('choiceTask').style.display = 'block';
}

// shows the interaction area
function shows_insertion_area(object){
  shows = object.href.split('#')[1];
  genericOBJ = document.getElementsByClassName('insertionType');
  
  document.getElementById('insertion').style.display = 'block';
  
  // hide all insertionType areas
  for(i=0; i<genericOBJ.length; i++){
    if(genericOBJ[i].id == shows){
      genericOBJ[i].style.display = 'block';
    } else{
      genericOBJ[i].style.display = 'none';
    }
  }
}

// creates table with data elements
function reloadData(){
  // defines creation area
  creationArea = document.getElementById('manual-insertion-area');
  
  // get sample size
  sizeSample = document.getElementById('sizeSample').value;
  
  // creates an array of elements
  tableData = [];
  tableTitle = [];
  tableRow = [];
  tableTR = [];
  tableTD = [];
  inputData= [];
  
  for(i=0; i<channels; i++){
    // creates new table
    tableData[i] = document.createElement('table');
    tableData[i].className = 'tableData';
    
    // creates new tr (table row)
    tableRow[i] = document.createElement('tr');
    
    // creates new th (table header)
    tableTitle[i] = document.createElement('th');
    tableTitle[i].innerHTML = 'CHANNEL ' + (i+1);
    
    // appends
    creationArea.appendChild(tableData[i]);
    tableData[i].appendChild(tableRow[i]);
    tableRow[i].appendChild(tableTitle[i]);
    
    // creates new td and input elements
    for(j=0; j<sizeSample; j++){
      // creates new td
      tableTD[j] = document.createElement('td');
      tableTR[j] = document.createElement('tr');
      
      // creates and configures new input
      inputData[j] = document.createElement('input');
      inputData[j].type = 'number';
      
      // appends
      tableData[i].appendChild(tableTR[j]);
      tableTR[j].appendChild(tableTD[j]);
      tableTD[j].appendChild(inputData[j]);
    }
    
    
  }
  
  console.log(creationArea);
  alert(sizeSample + ' inputs by ' + channels + ' channels');
}