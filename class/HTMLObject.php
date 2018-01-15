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
# [+] set_namespace($namespace);
# [+] set_id($id);
# [+] set_class_name($class_name);
# [+] set_parent_element($parent_element);
#
# [+] get_tag_name();
# [+] get_namespace();
# [+] get_id();
# [+] get_class_name();
# [+] get_parent_element();
#
# [+] to_html()
# 
# [+] to_dom()
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

interface HTMLObject {
  // defines generic methods
  public function set_tag_name($tag_name);
  public function set_namespace($namespace);
  public function set_id($id);
  public function set_class_name($class_name);
  public function set_parent_element($parent_element);

  public function get_tag_name():string;
  public function get_namespace():string;
  public function get_id():string;
  public function get_class_name():string;
  public function get_parent_element():string;
  
  //public function draw(): string;
  public function to_html(): string;
  public function to_dom():string;
}
