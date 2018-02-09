<?php

require_once("Data.php");
require_once("HTMLObject.php");

class SVGData extends Data implements HTMLObject{
  // HTML attributes
  private $tag_name;
  private $namespace;
  private $id;
  private $class_name;
  private $parent_element;
  
  // setters
  
  function set_tag_name($tag_name) {
    $this->tag_name = $tag_name;
  }

  function set_namespace($namespace) {
    $this->namespace = $namespace;
  }

  function set_id($id) {
    $this->id = $id;
  }

  function set_class_name($class_name) {
    $this->class_name = $class_name;
  }

  function set_parent_element($parent_element) {
    $this->parent_element = $parent_element;
  }
  
  // getters
  function get_tag_name():string {
    return $this->tag_name;
  }

  function get_namespace():string {
    return $this->namespace;
  }

  function get_id():string {
    return $this->id;
  }

  function get_class_name():string {
    return $this->class_name;
  }

  function get_parent_element():string {
    return $this->parent_element;
  }
  
  // to_html and to_dom
  
  public function to_html():string {
    return(
      "<" . $this->tag_name .
        " id=\"" . $this->id .
        "\" class=\"" . $this->class_name .
      "\"/>" .
      
      "</" . $this->tag_name .">"  
    );
  }
  
  public function to_dom():string {
    return(    
        "var $this = SVGData(" .
            $this->get_key_value() . ", " .
            $this->get_key_y() . ", " .
            $this->get_channel() . ", " .
            $this->get_id() . ", " .
            $this->get_parent_element() . ", " .
        ");"
    );
  }
  
  public function to_string():string{
    return(
        "<fieldset>" .
        "<legend>SVG_DATA</legend>" .
        
        
        "<p><strong>DATA</strong></p>" .
        "CHANNEL = " . $this->get_channel() . 
        "<br/>KEY_VALUE = " . $this->get_key_value() . 
        "<br/>KEY_Y = " . $this->get_key_y() .
        
        "<p><strong>IDENTIFICATION</strong></p>" .
        "ID = " . $this->get_id() .
        "<br/>CLASS = " . $this->get_class_name() .
        
        "<p><strong>DOM</strong></p>" .
        "PARENT_ELEMENT = " . $this->get_parent_element() .
        "<br/>TAG_NAME = " . $this->get_tag_name() .
        "<br/>NAMESPACE = " . $this->get_namespace() .
        "</fieldset>"
    );
  }

  
}
