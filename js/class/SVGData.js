/** javascript class to Data objects **/

// all properties
var SVGData = function(key_value, key_y, channel,
                       id, parent_element){
  // set the properties
  this.key_value = key_value;
  this.key_y = key_y;
  
  this.channel = channel;
  
  this.id = id;
  this.parent_element = parent_element;
}


// setters
SVGData.prototype.set_x_position = function(x_position){
  this.x_position = x_position;
}

SVGData.prototype.set_y_position = function(y_position){
  this.y_position = y_position;
}

SVGData.prototype.set_key_value = function(key_value){
  this.key_value = key_value;
}

SVGData.prototype.set_key_y = function(key_y){
  this.key_y = key_y;
}

SVGData.prototype.set_id = function(id){
  this.id = id;
}

SVGData.prototype.set_className = function(className){
  this.className = className;
}

SVGData.prototype.set_channel = function(channel){
  this.channel = channel;
}

SVGData.prototype.set_parent_element = function(parent_element){
  this.parent_element = parent_element;
}

SVGData.prototype.set_namespace = function(namespace){
  this.namespace = namespace;
}

SVGData.prototype.set_tagName = function(tagName){
  this.tagName = tagName;
}

// creates the DOM element
SVGData.prototype.createsDOM = function(){
  // creates new object
  return document.createElementNS(this.namespace, this.tagName);
}