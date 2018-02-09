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
        "\n\n\t$this->id="
        . "document.createElementNS('$this->namespace', '$this->tag_name');" .
        "\n\t$this->id.id='$this->id';" .
        "\n\t$this->id.setAttribute('class', '$this->class_name')" .
        "\n\t$this->id.setAttribute('fill', '#88d')" .
        "\n\t$this->id.setAttribute('r', '5')" .
        "\n\t$this->id.setAttribute('cx', '100')" .
        "\n\t$this->id.setAttribute('cy', '100')" .
        "\n\t$this->parent_element.appendChild($this->id);"
    );
  }
  
  public function to_string():string{
    return(
        "<br/>CHANNEL = " . $this->get_channel() . 
        "<br/>KEY_VALUE = " . $this->get_key_value() . 
        "<br/>KEY_Y = " . $this->get_key_y()
    );
  }

  
}
