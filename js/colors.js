/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
*/

baseColors =  ['rgb(153, 30, 0)','rgb(170, 62, 0)','rgb(187, 94, 0)','rgb(204, 126, 0)','rgb(221, 158, 0)','rgb(238, 190, 0)','rgb(255, 222, 0)','rgb(136, 255, 0)','rgb(150, 255, 31)','rgb(165, 255, 63)','rgb(180, 255, 95)','rgb(195, 255, 127)','rgb(210, 255, 159)','rgb(225, 255, 191)','rgb(240, 255, 223)',
              'rgb(153, 0, 30)','rgb(170, 0, 62)','rgb(187, 0, 94)','rgb(204, 0, 126)','rgb(221, 0, 158)','rgb(238, 0, 190)','rgb(255, 0, 222)','rgb(136, 0, 255)','rgb(150, 31, 255)','rgb(165, 63, 255)','rgb(180, 95, 255)','rgb(195, 127, 255)','rgb(210, 159, 255)','rgb(225, 191, 255)','rgb(240, 223, 255)'];

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

