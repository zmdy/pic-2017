<?php
require_once("DrawArea.php");
require_once("HTMLObject.php");

class SVG implements DrawArea, HTMLObject{
  // attributes of SVG element
  private $width;
  private $height;
  private $tag_name;
  private $namespace;
  private $id;
  private $class_name;
  private $parent_element;
  
  // setters and getters of the HTML_OBJECT
  public function set_tag_name($tag_name){
    $this->tag_name=$tag_name;
  }
  
  public function set_id($id) {
    $this->id = $id;
  }

  public function set_class_name($class_name) {
    $this->class_name = $class_name;
  }
  
  public function set_namespace($namespace) {
    $this->namespace = $namespace;
  }

  public function set_parent_element($parent_element) {
    $this->parent_element = $parent_element;
  }

  public function get_tag_name():string{
    return $this->tag_name;
  }
  
  public function get_namespace():string {
    return $this->namespace;
  }
  
  public function get_id():string {
    return $this->id;
  }

  public function get_class_name():string {
    return $this->class_name;
  }

  public function get_parent_element():string {
    return $this->parent_element;
  }
  
  // setters and getters of the DRAW_AREA
  public function set_width($width) {
    $this->width = $width;
  }
  
  public function set_height($height) {
    $this->height = $height;
  }
  
  public function get_width():float {
    return $this->width;
  }
  
  public function get_height():float {
    return $this->height;
  }
  
  // aqui vem o draw()
  
  // implements to_string()
  public function to_string():string {
    return (
        "TAG_NAME = " . $this->tag_name .
        "<br/>ID = " . $this->id .
        "<br/>CLASS = " . $this->class_name .
        "<br/>HTML_PARENT = " . $this->parent_element .
        "<br/>SIZE = " . $this->width . " x ". $this->height
    );
  }
  
  // implements to_html()
  public function to_html():string {
    return(
      "<" . $this->tag_name .
        " id=\"" . $this->id .
        "\" class=\"" . $this->class_name .
      "\"/>" .
      
      "</" . $this->tag_name .">"
    );
  }
  
  // implements to_dom()
  public function to_dom():string {
    return(
        "\n\t$this->id=document.createElementNS('$this->namespace'," .
        "'$this->tag_name');" .
        "\n\t$this->id.id='$this->id';" .
        "\n\t$this->id.setAttribute('class', '$this->class_name');" .
        "\n\t$this->parent_element.appendChild($this->id);"
    );
  }
  
}
