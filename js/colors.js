/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
function colorPallete(baseColor, amount){
  // array of colors
  colors = [];
  
  // checks if baseColor is an array
  if(Array.isArray(baseColor)){
    // base color is an array with [R, G, B]
    r = baseColor[0];
    g = baseColor[1];
    b = baseColor[2]; 
  } else{
    r = parseInt(Math.random() * 255);
    g = parseInt(Math.random() * 255);
    b = parseInt(Math.random() * 255);
  }
  
  range = parseInt(255/amount);
  
  for(i=0; i<amount; i++){
      color = ((range*(i+1) + r) % 256) + ', ' +
            ((range*(i+1) + g) % 256) + ', ' +
            ((range*(i+1) + b) % 256);
          
      colors[i] = color;
  } 
  
  console.log(colors);  
  
  return colors;
}
*/

function colorPallete(baseColor, changeRate, amount){
  // get the base color
  r = baseColor[0];
  g = baseColor[1];
  b = baseColor[2]; 
  
  // get the rate of changes
  dR = changeRate[0];
  dG = changeRate[1];
  dB = changeRate[2];
  
  // return array
  pallete = [];
  
  // calculate new colors
  for(i=0; i<amount; i++){
    color = (r + dR*(i+1))%256 + ', ' +
            (g + dG*(i+1))%256 + ', ' +
            (b + dB*(i+1))%256;
          
    pallete[i] = color;
  }
  
  return pallete;
}

function createRandomColors(amount){
  colors = [];
  
  // creates new random colors
  for(i=0; i<amount; i++){
    r = parseInt(Math.random() * 255);
    g = parseInt(Math.random() * 255);
    b = parseInt(Math.random() * 255);
    color = r + ', ' + g + ', ' + b;
    
    colors[i] = color;
  }
  
  // returns
  return colors;
}

function createRandomColorsInterval(amount, min, max){
  colors = [];
  
  // creates new random colors
  for(i=0; i<amount; i++){
    r = parseInt(Math.random() * max) + min;
    g = parseInt(Math.random() * max) + min;
    b = parseInt(Math.random() * max) + min;
    color = r + ', ' + g + ', ' + b;
    
    colors[i] = color;
  }
  
  // returns
  return colors;
}