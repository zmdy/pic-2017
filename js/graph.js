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
  // gets the numeric data values
  graph_data = 'graph_data';
  
  // parses it as float
  graph_data = parse_float(
                get_cookie(graph_data)
               );
  
  // get the size sample (amount) of data
  sample_size = data_points.length;
  
  // creates the point to be plotted in the graph
  graph_points = [];
  
  // creates the DOM objects
  for(i=0; i<sample_size; i++){
    // creates the DOM object
    graph_points[i] = data_points[i].createsDOM();
  }
}

function set_general_variables(){
  // resets general variables as -1
  offset_x = offset_y =
  svg_width = svg_height = svg_namespace =
  lineX = lineY = line_offset_x = line_offset_y = 
  amplitude = lateralAmplitude =
  max_x_value = min_x_value = 
  max_y_value = min_y_value = 
  verticalLines = horizontalLines = 
  xLabel = yLabel = 
  axisGroup = -1;
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
  
  // refresh the graph
  refresh_graph(); 
}

function show_graph_status(){
  document.getElementById('graphStatus').innerHTML =
  // shows size  
  'SIZE: ' + svg_width + ' x ' + svg_height +
   
  // shows offset_data
  ' px<br/>OFFSET_DATA: offset_x = ' + offset_x + '| offset_y = ' + offset_y
  + ' | lineX = ' + lineX + ' | lineY = ' + lineY +
    
  // shows graph controls
  '<br/>GRAPH_CONTROL: ' +
  'amplitude = ' + amplitude + ' | lateralAmplitude = ' + lateral_amplitude +
  
  // shows range  
  '<br/>RANGE: min_x_value = ' + min_x_value + ' | max_x_value = ' + max_x_value +
  ' | min_y_value = ' + min_y_value + ' | max_y_value = ' + max_y_value +
  
  // shows sample size
  '<br/>SAMPLE_SIZE: ' + (graph_data.length - 1) +
  
  // shows data
  '<br/>DATA: ' + graph_data;
  //'<br/>NÚMERO DE LINHAS É ' + (lateral_amplitude / document.getElementById('xSpace').value);
}
