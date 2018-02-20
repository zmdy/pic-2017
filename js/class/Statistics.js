/** javascript class to Data objects **/

// all properties
var Statistics = function(data_array){
  // set the properties
  this.data_array = data_array;
  this.size = data_array.length;
}


// setters
Statistics.prototype.calc_avarage = function(precision){
  avr = 0;
  
  for(i=0; i<this.size; i++){
    avr += parseFloat(this.data_array[i].key_value);
  }
  
  this.avr = (avr/this.size).toPrecision(precision);
  
  return this.avr;
}

Statistics.prototype.calc_min = function(){
   min = parseFloat(this.data_array[0].key_value);
  
  for(i=0; i<this.size; i++){
      min = parseFloat(this.data_array[i].key_value) < min ?
            parseFloat(this.data_array[i].key_value) : min;
  }
  this.min = min;
  
  return this.min;
}

Statistics.prototype.calc_max = function(){
  max = parseFloat(this.data_array[0].key_value);
  
  for(i=0; i<this.size; i++){
      max = parseFloat(this.data_array[i].key_value) > max ?
            parseFloat(this.data_array[i].key_value) : max;
  }
  
  this.max = max;
  
  return this.max;
}

Statistics.prototype.calc_deviation = function(){
  deviation = [];
  
  for(i=0; i<this.size; i++){
    deviation[i] = parseFloat(this.data_array[i].key_value) - this.avr;
  }
  
  this.deviation = deviation;
  
  return this.deviation;
}

Statistics.prototype.calc_variance = function(precision){
  variance = 0;
  
  for(i=0; i<data_points.length; i++){
    variance += Math.pow(this.deviation[i], 2);
  }
  
  this.variance = (variance/(data_points.length - 1)).toPrecision(precision);
  
  return this.variance;
}

Statistics.prototype.calc_standard_deviation = function(precision){
  this.s_deviation = Math.sqrt(this.variance).toPrecision(precision);
  
  return this.s_deviation;
}

Statistics.prototype.calc_var_coef = function(precision){
  this.var_coef = (parseFloat(this.s_deviation)
                  / parseFloat(this.avr)).toPrecision(precision);
  
  return this.var_coef;
}

// creates the DOM element
Statistics.prototype.toString = function(){
  return (
      'size = ' + this.size +
      '\navarage = ' + this.avr +
      '\nmin = ' + this.min +
      '\nmax = ' + this.max +
      '\nvariance = ' + this.variance +
      '\n&sigma; = ' + this.s_deviation +
      '\nvariation_coefficient = ' + this.var_coef +
      '\ndeviation = ' + this.deviation
    );
}

Statistics.prototype.StatisticReport = function(){
  this.calc_avarage();
  this.calc_min();
  this.calc_max();
  this.calc_deviation();
  this.calc_variance(5);
  this.calc_standard_deviation(5);
  this.calc_var_coef(4);
}