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

function set_lateral_amplitude(){
  document.getElementById('lateralAmplitude').value =
    (amplitude *  svg_width/svg_height ).toPrecision(6);
  
  refresh_graph();
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
}

function set_amplitude_value(){
  set_amplitude();
  
  amplitude = amplitude.value;
  lateral_amplitude = lateral_amplitude.value;
}

function set_offset_value(){
  set_offset();
  
  offset_x = offset_x.value;
  offset_y = offset_y.value;
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