<?php
/*
 * DRAWABLE_OBJECT
 * This Interface represents an abstractation of
 * a generic drawable object in a given surface
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

interface DrawableObject {
  // defines set methods
  public function set_x_position($x_position);
  public function set_y_position($y_position);
  
  public function set_fill($fill);
  public function set_fill_color($fill_color);
  
  public function set_outline($outline);
  public function set_outline_color($outline_color);
  public function set_outline_width($outline_width);
  
  public function set_draw_area($draw_area);
  
  // defines get methods
  public function get_x_position(): float;
  public function get_y_position(): float;
  
  public function get_fill(): bool;
  public function get_fill_color(): string;
  
  public function get_outline(): bool;
  public function get_outline_color(): string;
  public function get_outline_width(): string;
  
  public function get_draw_area(): DrawArea;
  
  // defines to_string
  public function to_string(): string;
}
