/*
# ************************************ #
# SVG.JS
# 
# This script is used to makes all
# DOM interaction between PHP and HTML 
#
# It uses the bases of PHP Class 'HTMLObject'
# to make a better and standardize connection
#
# METHODS
# [$] get_data(); 
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

function reset_offset_lines(){
  if (line_offset_x == -1){
    // creates lines of reference
    set_offset_lines();
    
    // appends
    svg_graph.appendChild(line_offset_x);
    svg_graph.appendChild(line_offset_y);
  }
  
  // defines
  lineX = parseFloat(offset_x).toPrecision(5);
  lineY = parseFloat(svg_height - offset_y).toPrecision(5);

  // configures line_offset_x
  line_offset_x.setAttribute('stroke', '#88d');
  line_offset_x.setAttribute('stroke-width', '0.12em');
  line_offset_x.setAttribute('x1', lineX);
  line_offset_x.setAttribute('x2', lineX);
  line_offset_x.setAttribute('y1', 0);
  line_offset_x.setAttribute('y2', svg_height);

  // configures line_offset_y
  line_offset_y.setAttribute('stroke', '#88d');
  line_offset_y.setAttribute('stroke-width', '0.12em');
  line_offset_y.setAttribute('x1', 0);
  line_offset_y.setAttribute('x2', svg_width);
  line_offset_y.setAttribute('y1', lineY);
  line_offset_y.setAttribute('y2', lineY);
}

function set_amplitude(){
  // get amplitudes elements
  amplitude = document.getElementById('amplitude');
  lateral_amplitude = document.getElementById('lateralAmplitude');
  
  // sets min and max
  amplitude.min = lateral_amplitude.min = 0.01;
  amplitude.step = lateral_amplitude.step = 10e-3;
  amplitude.max = svg_width;
  lateral_amplitude.max = svg_height;
}

function set_data_svg(){
  // get the points created with PHP (data_points)
  // and reloads its position
  
  // reloads reference lines
  lineX = parseFloat(lineX);
  lineY = parseFloat(lineY);
  
  for(i=0; i<sample_size; i++){
    // position in the channel
    point_channel_position = parseInt(data_points[i].key_y);
    point_channel = data_points[i].channel;
    
    // calculates the position
    p_x = parseFloat(lineX + ((point_channel_position + 1) * svg_width/max_x_value)).toPrecision(6);
    p_y = parseFloat(lineY - (graph_data[i] * svg_height/max_y_value)).toPrecision(6);
    
    // sets the position
    graph_points[i].setAttribute('cx', p_x);
    graph_points[i].setAttribute('cy', p_y);
    graph_points[i].setAttribute('r', document.getElementById('point_size').value);
    graph_points[i].setAttribute('fill', baseColors[point_channel * 5]);
    graph_points[i].setAttribute('onclick', 'show_point_data(this)');
  }
  
}

function set_lateral_amplitude(){
  document.getElementById('lateralAmplitude').value =
    (amplitude *  svg_width/svg_height ).toPrecision(6);
  
  refresh_graph();
}

function set_offset(){
  // get offset elements
  offset_x = document.getElementById('oX');
  offset_y = document.getElementById('oY');
  
  // get manual offset elements
  oX_manual = document.getElementById('oX_manual');
  oY_manual = document.getElementById('oY_manual');
  
  // set min and max
  offset_x.min = offset_y.min = 0;
  offset_x.step = offset_y.step = 10e-3;
  offset_x.max = svg_width;
  offset_y.max = svg_height;
}

function set_offset_lines(){ 
  // creates lines
  line_offset_x = document.createElementNS(svg_namespace, 'line');
  line_offset_y = document.createElementNS(svg_namespace, 'line');
}

function set_amplitude_value(){
  set_amplitude();
  
  amplitude = amplitude.value;
  lateral_amplitude = lateral_amplitude.value;
}

function set_offset_value(){
  set_offset();
  
  if(document.getElementById('manualOffset').checked){
    offset_x = oX_manual.value;   
    offset_y = oY_manual.value;
  } else{
    offset_x = offset_x.value;   
    offset_y = offset_y.value;
    
    offset_x.value = offset_x;
    offset_y.value = offset_y;
  }
  
  // shows the values in the boxes
  document.getElementById('oX_value').value = offset_x;
  document.getElementById('oY_value').value = offset_y;
}

function set_graph_range(){
  // defines the maximum and minimum values
  // in relation to the zero point O =  (offsetX, offsetY)
  
  // X-AXIS
  min_x_value = -(lateral_amplitude * (lineX / svg_width)).toPrecision(6);
  max_x_value = -(-lateral_amplitude - min_x_value).toPrecision(6);
  
  // Y-AXIS
  max_y_value = (amplitude * (lineY / svg_height)).toPrecision(6);
  min_y_value = -(amplitude - max_y_value).toPrecision(6);
}

function connectPoints(){
  // get type of connection
  if(document.getElementById('noConnection').checked){
    // don't show the elements
    if(document.getElementById('graph_line') != null){
      document.getElementById('graph_line').style.display = 'none'; 
    } else{
      graph_line = null;
    }
  } else if(document.getElementById('linearConnection').checked){
   
    connectPoints_line();
  } else{
    console.log('CONExão BEZIER');
  }
}

function connectPoints_line(){
  // defines array of position
  line_points = "";
  
  // get the positions
  for(i=0; i<graph_points.length; i++){
    x = (graph_points[i].cx.baseVal.value).toPrecision(5);
    y = (graph_points[i].cy.baseVal.value).toPrecision(5);
    
    line_points +=  x + ',' + y;
    
    if(i != graph_points.length - 1){
      line_points += ' ';
    }
  }
  
  // creates new line
  if(graph_line == null){
    // creates new polyline element
    graph_line = document.createElementNS(svg_namespace, 'polyline');
    
    // appends
    svg_graph.appendChild(graph_line);
    
    // configures
    graph_line.setAttribute('id', 'graph_line');
    graph_line.setAttribute('fill', 'none');
    graph_line.setAttribute('stroke', '#88d');
    graph_line.setAttribute('strokeWidth', '0.1em');
  }
  
  graph_line.setAttribute('points', line_points);
  document.getElementById('graph_line').style.display = 'inline'; 
}