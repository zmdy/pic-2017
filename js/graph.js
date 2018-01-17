/*
# ************************************ #
# GRAPH.JS
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

function get_amplitude(){
  amplitude = amplitude.value;
  lateral_amplitude = lateral_amplitude.value;
}

function get_data(){
  graph_data = 'graph_data';
  
  graph_data = parse_float(
                get_cookie(graph_data)
               );
}

function set_amplitude(){
  // get amplitudes elements
  amplitude = document.getElementById('amplitude');
  lateral_amplitude = document.getElementById('lateralAmplitude');
  
  // sets min and max
  amplitude.min = lateral_amplitude.min = 0;
  amplitude.step = lateral_amplitude.step = 10e-3;
  amplitude.max = svg_width;
  lateral_amplitude.max = svg_height;
  
  amplitude.value = amplitude.max/2;
  lateral_amplitude.value = lateral_amplitude.max/2;
  
}

function set_general_variables(){
  // resets general variables as -1
  offset_x = offset_y =
  svg_width = svg_height = svg_namespace =
  lineX = lineY = line_offset_x = line_offset_y = 
  amplitude = lateralAmplitude = -1;
}

function set_offset(){
  // get offset elements
  offset_x = document.getElementById('oX');
  offset_y = document.getElementById('oY');
  
  // set min and max
  offset_x.min = offset_y.min = 0;
  offset_x.step = offset_y.step = 10e-3;
  offset_x.max = svg_width;
  offset_y.max = svg_height;
  
  // defines value as half
  offset_x.value = offset_x.max / 2;
  offset_y.value = offset_y.max / 2;
  
  // calls get_offset()
  set_offset_value();
}

function set_offset_value(){
  offset_x = document.getElementById('oX').value;
  offset_y = document.getElementById('oY').value;
    
  // calls set_offset_lines
  reset_offset_lines();
}

function set_svg(){
  // set width and height
  svg_width = (0.95 * get_size()[0]).toPrecision(5);
  svg_height = (0.65 * get_size()[1]).toPrecision(5);
  
  // set properties
  svg_graph.setAttribute('width', svg_width);
  svg_graph.setAttribute('height', svg_height);
  
  // get namespace
  svg_namespace = 'http://www.w3.org/2000/svg';
  
  // sets the graph controls
  set_amplitude();
  get_amplitude();
  
  // sets the offset
  set_offset();  
  

  

}

function show_graph_status(){
  // shows offset_data
  document.getElementById('offsetData').innerHTML =
      'OFFSET_DATA: offset_x = ' + offset_x + '| offset_y = ' + offset_y
    + ' | lineX = ' + lineX + ' | lineY = ' + lineY;
  
  // shows graph controls
  document.getElementById('graphControl').innerHTML = 'GRAPH_CONTROL: ' +
    'amplitude = ' + amplitude + ' | lateralAmplitude = ' + lateral_amplitude;
  
  // shows data
  document.getElementById('graphData').innerHTML = 'DATA: ' + graph_data;
}
