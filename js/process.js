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
  
  // defines firs time
  first = null;
}

// shows the interaction area
function shows_insertion_area(object){
  // checks if wants excludes everything
  if (first != null){
    confirm_excl = confirm('Excludes objects previously created?');  
   
    if(confirm_excl){
      // restes insertion areas
      resets_insertion_areas();
    }
  }
  
  // object to shows
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
  
  first = 0;
}

// resets insertion areas
function resets_insertion_areas(){
  /****** MANUAL INSERTION ******/
  // tables created in manual insertion
  tables = document.getElementsByClassName('tableData');
  
  // removes all tables previously created
  for(i=0; i<tables.length; i++){
    tables[i].parentNode.removeChild(tables[i]);
  }
  
  // shows all buttons
  document.getElementById('btnCreate').style.display = 'inline-block';
  document.getElementById('btnSubmit').style.display = 'inline-block';
  document.getElementById('sizeSample').value = 0;
  
  /****** OTHER INSERTION ******/
}

// creates table with data elements
function createData(){
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
  spanRemove = [];
  spanCreate = [];
  
  //colors = colorPallete([250, 0, 0], [-10, 50, -50], channels);
  
  for(i=0; i<channels; i++){
    // creates new table
    tableData[i] = document.createElement('table');
    tableData[i].className = 'tableData';
    tableData[i].id = 'channel_' + (i+1);
    
    // creates new tr (table row)
    tableRow[i] = document.createElement('tr');
    
    // creates new th (table header)
    tableTitle[i] = document.createElement('th');
    tableTitle[i].innerHTML = 'CHANNEL ' + (i+1);
    
    // creates button for add new input
    spanCreate[i] = document.createElement('button');
    spanCreate[i].innerHTML = 'NEW';
    spanCreate[i].className = 'spanCreate';
    spanCreate[i].onclick = createDataElement;
    
    // appends
    creationArea.appendChild(tableData[i]);
    tableData[i].appendChild(tableRow[i]);
    tableRow[i].appendChild(tableTitle[i]);
    tableTitle[i].appendChild(spanCreate[i]);
    
    // creates new td and input elements
    for(j=0; j<sizeSample; j++){
      // creates new td
      tableTD[j] = document.createElement('td');
      tableTR[j] = document.createElement('tr');
      
      // creates and configures new input
      inputData[j] = document.createElement('input');
      inputData[j].type = 'number';
      inputData[j].className = 'inputData';
      
      // creates and configures span
      spanRemove[j] = document.createElement('button');
      spanRemove[j].innerHTML = '&#x2717;';
      spanRemove[j].className = 'spanRemove';
      spanRemove[j].onclick = removeDataElement;
      
      // appends
      tableData[i].appendChild(tableTR[j]);
      tableTR[j].appendChild(tableTD[j]);
      tableTD[j].appendChild(inputData[j]);
      tableTD[j].appendChild(spanRemove[j]);
    }
  }
  
  // don't show btnCreate
  document.getElementById('btnCreate').style.display = 'none';
  document.getElementById('btnSubmit').style.display = 'inline-block';
}

// remove area of elements
function removeDataElement(){
  // parent table
  parentTable = this.parentNode.parentNode.parentNode;
  
  // get the number of elements
  if(parentTable.childElementCount > 2){
    parent = this.parentNode.parentNode;
    parent.parentNode.removeChild(parent);
  } else{
    confirm_excl = confirm('Confirms exclusion of ' + parentTable.id + '!!!');
    
    // if confirms
    if(confirm_excl == true){
      // remove current channel
      ref =  parentTable.id.split('_')[1] - 1;
      obj = document.getElementsByClassName('tableData')[ref];
      
      obj.parentNode.removeChild(obj);
      
      // makes tableData array 'null' in ref position
      tableData[ref] = null;
      
      // redeuces channels
      channels --;
    }
  }   
}

// remove area of elements
function createDataElement(){
  // get parent table
  parentTable = this.parentNode.parentNode.parentNode;
  
  // new td and tr
  tableTD = document.createElement('td');
  tableTR = document.createElement('tr');

  // creates and configures new input
  inputData = document.createElement('input');
  inputData.type = 'number';
  inputData.className = 'inputData';

  // creates and configures span
  spanRemove = document.createElement('button');
  spanRemove.innerHTML = '&#x2717;';
  spanRemove.className = 'spanRemove';
  spanRemove.onclick = removeDataElement;

  // appends
  parentTable.appendChild(tableTR);
  tableTR.appendChild(tableTD);
  tableTD.appendChild(inputData);
  tableTD.appendChild(spanRemove);
}

// submit data
function submitManualData(){
  // defines data as an array
  var data = [];
  
  // defines delimiter
  var channel_size = [];
  
  // defines start value
  v_min = 0;
  
  // define inputs objects
  ref_obj = document.getElementsByClassName('inputData');
  
  // get each channel
  for(i=0; i<channels; i++){
    // if channel is no null
    if(tableData[i] != null){
      // get number of elements
      ref = tableData[i].childElementCount - 1;
      v_max = v_min + ref;
     
      // makes an array in data[i]
      data[i] = [ref];
      
      // channel size
      channel_size[i] = ref;
      
      // get values
      for(j=v_min; j<v_max; j++){
        // send value to the array
        data[i][j-v_min] = ref_obj[j].value;
      }
      
      // changes min
      v_min = v_max;
    }
  }
  
  // creates the cookies of data and channel
  data = document.cookie = 'graph_data='+data;
  channels = document.cookie = 'channels='+channels;
  channel_size = document.cookie = 'channel_size='+channel_size;
}