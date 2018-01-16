/*
# ************************************ #
# GRAPH-PROCESS.JS
# 
# This script is used to makes all
# conection with auxiliary .js files
# related to the graphic processing
#
# LIBRARIES
# [$] graph.js
#
# METHODS
# 
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
# "When we speak of free software,
# we are referring to freedom, not
# price."
# __ Gnu Public License 3.0 Preamble
# 
# ************************************ #
# ******* @hudsonUriel
# ******* OCT-2017
# *******  Lamniscata_Systems_#001 
# ************************************ #
#
*/

// configures the behaviors of the page in diferent contexts

window.onload = start_graph;

window.onresize = set_svg;

function start_graph(){
  // set general use varibles
  set_general_variables();
  
  // get the data
  get_data();
  
  // set svg
  set_svg();
}