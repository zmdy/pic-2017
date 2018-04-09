<?php

require_once("DrawableObject.php");
require_once("StatisticsObject.php");

class Data implements DrawableObject, StatisticsObject{
  // Drawable attriutes
  private $x_position;
  private $y_position;
  private $fill;
  private $fill_color;
  private $outline;
  private $outline_color;
  private $outline_width;
  private $draw_area;
  
  // Statistics attributes
  private $key_value;
  private $key_y;
  private $channel;
  
  // setters
  function set_x_position($x_position) {
    $this->x_position = $x_position;
  }

  function set_y_position($y_position) {
    $this->y_position = $y_position;
  }

  function set_fill($fill) {
    $this->fill = $fill;
  }

  function set_fill_color($fill_color) {
    $this->fill_color = $fill_color;
  }

  function set_outline($outline) {
    $this->outline = $outline;
  }

  function set_outline_color($outline_color) {
    $this->outline_color = $outline_color;
  }

  function set_outline_width($outline_width) {
    $this->outline_width = $outline_width;
  }

  function set_draw_area($drawArea) {
    $this->drawArea = $drawArea;
  }

  function set_key_value($key_value) {
    $this->key_value = $key_value;
  }

  function set_key_y($key_y) {
    $this->key_y = $key_y;
  }
  
  function set_channel($channel) {
    $this->channel = $channel;
  }

  // getters
  function get_x_position():float {
    return $this->x_position;
  }

  function get_y_position():float {
    return $this->y_position;
  }

  function get_fill():bool {
    return $this->fill;
  }

  function get_fill_color():string {
    return $this->fill_color;
  }

  function get_outline():bool {
    return $this->outline;
  }

  function get_outline_color():string {
    return $this->outline_color;
  }

  function get_outline_width():string {
    return $this->outline_width;
  }

  function get_draw_area():DrawArea {
    return $this->drawArea;
  }

  function get_key_value():float {
    return $this->key_value;
  }

  function get_key_y():float {
    return $this->key_y;
  }

  
  function get_channel():int {
    return $this->channel;
  }
  // to_string
  public function to_string():string {
    return(
        "TAG_NAME = " . $this->tag_name .
        "<br/>ID = " . $this->id .
        "<br/>CLASS = " . $this->class_name .
        "<br/>HTML_PARENT = " . $this->parent_element .
        "<br/>CHANNEL = " . $this->channel . 
        "<br/>KEY_VALUE = " . $this->key_value . 
        "<br/>KEY_Y = " . $this->key_y
    );
  }
}
