<?php
/*
# ************************************ #
# Interface DRAW_AREA
# 
# This Interface represents an abstractation of
# a generic drawable space, with height and width
#
# METHODS
# [+] set_width($width);
# [+] set_height($height);
#
# [+] get_width();
# [+] get_height();
#
# [+] to_string();
# 
# ************************************ #
# This INFETRFACE is licensed under GPL terms.
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

interface DrawArea {
  // defines generic methods
  public function set_width($width);
  public function set_height($height);
  
  public function get_width(): float;
  public function get_height(): float;
  
  //public function draw(): string;
  public function to_string(): string;
}
