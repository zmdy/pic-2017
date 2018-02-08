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
  
  console.log('Object created');
}

SVGData.prototype.set_x_position = function(x_position){
  this.x_position = x_position;
}

SVGData.prototype.set_y_position = function(y_position){
  this.y_position = y_position;
}