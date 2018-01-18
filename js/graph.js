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

function get_data(){
  graph_data = 'graph_data';
  
  graph_data = parse_float(
                get_cookie(graph_data)
               );
}

function set_general_variables(){
  // resets general variables as -1
  offset_x = offset_y =
  svg_width = svg_height = svg_namespace =
  lineX = lineY = line_offset_x = line_offset_y = 
  amplitude = lateralAmplitude = -1;
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
  
  // calls get_offset()
  refresh_graph();
  
  // sets the points
  set_data_svg();
  
  // shows graph_status
 // show_graph_status();
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
