<?php
/*
# ************************************ #
# Interface HTML_OBJECT
# 
# This Interface represents an abstractation of
# a generic HTML object with its ID, CLASS_NAME,
# TAG_NAME and PARENT_ELEMENT
#
# These properties can be used with DOM
# for the creation of dynamic pages with PHP + JS
#
# METHODS
# [+] set_tag_name($tag_name);
# [+] set_id($id);
# [+] set_class_name($class_name);
# [+] set_parent_element($parent_element);
#
# [+] get_tag_name();
# [+] get_id();
# [+] get_class_name();
# [+] get_parent_element();
#
# [+] to_html()
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

interface DrawArea {
  // defines generic methods
  public function set_width($width);
  public function set_height($height);
  
  public function get_width(): float;
  public function get_height(): float;
  
  //public function draw(): string;
  public function to_string(): string;
}
