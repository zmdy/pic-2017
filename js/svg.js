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

function set_offset_lines(){ 
  // creates lines
  line_offset_x = document.createElementNS(svg_namespace, 'line');
  line_offset_y = document.createElementNS(svg_namespace, 'line');
}

function reset_offset_lines(){
  if (line_offset_x == -1){
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

  // shows offset_data
  document.getElementById('offsetData').innerHTML =
      'OFFSET_DATA: offset_x = ' + offset_x + '| offset_y = ' + offset_y
    + ' | lineX = ' + lineX + ' | lineY = ' + lineY;
}