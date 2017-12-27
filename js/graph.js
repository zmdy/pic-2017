window.onload = create;
window.onresize =  svg_graph;

function create(){
  // defines event of amplitude value
  document.getElementById('ampl').onchange = svg_graph;
  
   // defines namespace
  NS = 'http://www.w3.org/2000/svg';

  // get offset controls
  oX = document.getElementById('oX');
  oY = document.getElementById('oY');
  
  // process the data
  process_data();
  
  // calls svg_graph
  first = true;
  svg_graph();
  first = false; 
}

function process_data(){
  // splits the cookies
  data = document.cookie.split(';');
  graphData = 'graphData';
  
  
  // search for graphData
  for(i=0; i<data.length; i++){
    if(data[i].split('=')[0].
      replace(' ', '') == graphData){
      
      // fill graphData with its float values
      graphData = data[i].split('=')[1].split(',');
      for(j=0; j<graphData.length; j++){
        graphData[j] = parseFloat(graphData[j]);
      }
      break;
    }
  }

}

function svg_graph(){
  // if it's not first time, remove previous svg_graph
  if (!first){
    svg_graph.removeChild(lX);
    svg_graph.removeChild(lY);
    document.getElementById('graph').removeChild(svg_graph);
    amplitude = 50;
    //amplitude = parseFloat(document.getElementById('ampl').value).toPrecision(6);
 }

  // creates/resets the svg
  svg_graph = document.createElementNS(NS, 'svg');
  svg_graph.id='svg_graph';
  
  // resets the svg size
  gW = svg_graph.style.width = parseFloat(0.95 * window.innerWidth).toPrecision(6);
  gH = svg_graph.style.height = parseFloat(0.65 * window.innerHeight).toPrecision(6);
  
  // configures oX/oY min and max
  oX.min = oY.min= 0;
  oX.max = gW;
  oY.max = gH;
  
  // defines oX and oY value as half of width/height
  oX.value = parseFloat(gW/2).toPrecision(6);
  oY.value = parseFloat(gH/2).toPrecision(6);
  
  if(first){ // defines amplitude
    // defines amplitude
    document.getElementById('ampl').step = parseFloat(10e-3);
    amplitude = document.getElementById('ampl').value = parseFloat(oY.value).toPrecision(6);
    linePadding.value = 0.1 * amplitude;
  }
  
  // defines lateralAmplitude
  lateralAmplitude = parseFloat(amplitude * gW / gH).toPrecision(6);
  
  // configures lines
  lX = document.createElementNS(NS, 'line');
  lY = document.createElementNS(NS, 'line');
  
  // calls graph_offset()
  graph_offset();
  
  // appends svg_graph
  document.getElementById('graph').appendChild(svg_graph);
  svg_graph.appendChild(lX);
  svg_graph.appendChild(lY);  
}

function graph_offset(){
  // defines
  lineX = parseFloat(oX.value).toPrecision(6);
  lineY = parseFloat(gH - oY.value).toPrecision(6);
  
  // configures lX
  lX.setAttribute('stroke', '#88d');
  lX.setAttribute('stroke-width', '0.2em');
  lX.setAttribute('x1', lineX);
  lX.setAttribute('x2', lineX);
  lX.setAttribute('y1', 0);
  lX.setAttribute('y2', gH);
  
  // configures lY
  lY.setAttribute('stroke', '#88d');
  lY.setAttribute('stroke-width', '0.2em');
  lY.setAttribute('x1', 0);
  lY.setAttribute('x2', gW);
  lY.setAttribute('y1', lineY);
  lY.setAttribute('y2', lineY);
  
  // define pos0
  pos0 = lineX + ', ' + lineY;
  
  // defines max and min of x-axis
  maxSpaceX = parseFloat( (lineX * lateralAmplitude) / gW).toPrecision(6);
  minSpaceX = parseFloat( lateralAmplitude - maxSpaceX ).toPrecision(6);
  
  // defines max and min of y-axis
  maxY = parseFloat( (lineY*amplitude) / gH).toPrecision(6);
  minY = parseFloat( maxY - amplitude ).toPrecision(6);
  
   // calls graph_lines()
  linePadding.value = 0.10 * amplitude;
  graph_lines();
  
    // graph the points
  graph_data();
}

function graph_data(){
  type = graphData[0];
  sampleSize = graphData.length - 1;
  lineX = parseFloat(lineX);
  lineY = parseFloat(lineY);
  
  // statistics
  avr = 0;
  max = graphData[1];
  min = graphData[1];
  amplGraph = 0;
  sd = 0;
  deviation = [];
  
  // remove previus values
  if(!first){
    for(i=0; i<sampleSize; i++){
      points[i].parentNode.removeChild(points[i]);
    }
  }
  
  if (type == 1){ // if sequential insertion
    points = [];
    radius = 3;
    
    for(i=0; i<sampleSize; i++){
      // defines pX and pY
      pX = parseFloat((i+1)*2.5*radius +lineX  + (( (i+1) * lineX) / maxSpaceX)).toPrecision(6);
      pY = parseFloat(lineY - ((graphData[i+1] * lineY) / maxY)).toPrecision(6);
      
      // creates a circle element
      points[i] = document.createElementNS(NS, 'circle');
      
      // configures point
      points[i].setAttribute('r', radius);
      points[i].setAttribute('fill', '#c55');
      
      points[i].setAttribute('cx', pX);
      points[i].setAttribute('cy', pY);
      
      points[i].setAttribute('class', 'dataPoints');
      points[i].setAttribute('id', 'val_' + graphData[i+1] + '_pos_' + (i+1));
      
      points[i].setAttribute('onclick', 'stat(this)');
      
      // statistics
      avr += graphData[i+1];
      max = graphData[i+1] > max ? graphData[i+1] : max;
      min = graphData[i+1] < min ? graphData[i+1] : min;
      
      // appends
      svg_graph.appendChild(points[i]);
    }
    
    
    // statistics
    avr /= sampleSize;
    avr = avr.toPrecision(6);
    amplGraph = max - min;
    
    
    for(i=0; i<sampleSize; i++){
      // calculates deviation
      deviation[i] = graphData[i+1] - avr;
      sd += Math.pow(deviation[i], 2);
    }
    
    sd = Math.sqrt(sd / (sampleSize-1)).toPrecision(6);
    varCf = (sd / Math.pow(sd, 2)).toPrecision(6);
  }
  
  
  // prints it
   document.getElementById('report').innerHTML = '<h2>Graphic Proprieties</h2>\n\
    O = (' + pos0 +
    ')<br/> Amplitude = ' + amplitude +
    '<br/> Lateral Amplitude = ' + lateralAmplitude +
    ' points<br/> maxSpaceX = ' + maxSpaceX +
    '<br/> minSpaceX = ' + minSpaceX +
    '<br/> maxY = ' + maxY +
    '<br/> minY = ' + minY +
    '<hr><h2>Statistics</h2>average = ' + avr +
    '<br/>max = ' + max +
    '<br/>min = ' + min +
    '<br/>amplitude = ' + amplGraph +
    '<br/>standardDeviation = ' + sd +
    '<br/>variationCoeficient = ' + varCf + ' = ' + varCf*100 + '%';
}

function graph_lines(){
  // remove previous lines
  if(!first){
    aux1 = document.getElementsByClassName('divisionLineX');
    aux2 = document.getElementsByClassName('divisionLineY');
    
    for(i=0; i<aux1.length; i++){
      svg_graph.removeChild(aux1[i]);
    }
    
    for(i=0; i<aux2.length; i++){
      svg_graph.removeChild(aux2[i]);
    }
    
    console.log('X = ' + aux1.length + ' - ' +
      'Y = ' + aux2.length);
    
  }
  
  // defines linePadding
  linePadding = document.getElementById('linePadding');
  linePadding.step = 10e-2;
  linePadding.max = amplitude/2;
  linePadding = linePadding.value;
  
  // number of lines
  nLineX = 2*parseInt(lateralAmplitude/linePadding);
  nLineY = 2*parseInt(amplitude/linePadding);
  
  // create array of lines (division lines)
  dLineX = [];
  dLineY = [];
  
  // create x-axis division lines
  for(i=0; i<nLineX; i++){
    // creates line
    dLineX[i] = document.createElementNS(NS, 'line');
    
    // configures line
    dLineX[i].setAttribute('stroke', '#555');
    dLineX[i].setAttribute('x1', i*linePadding);
    dLineX[i].setAttribute('x2', i*linePadding);
    dLineX[i].setAttribute('y1', 0);
    dLineX[i].setAttribute('y2', gH);
    dLineX[i].setAttribute('class', 'divisionLineX');
    
    // appends
    svg_graph.appendChild(dLineX[i]);
    
  }
  
  // creates y-axis division lines
  for(i=0; i<nLineY; i++){
    // creates line
    dLineY[i] = document.createElementNS(NS, 'line');
    
    // configures line
    dLineY[i].setAttribute('stroke', '#555');
    dLineY[i].setAttribute('x1', 0);
    dLineY[i].setAttribute('x2', gW);
    dLineY[i].setAttribute('y1', i*linePadding);
    dLineY[i].setAttribute('y2', i*linePadding);
    dLineY[i].setAttribute('class', 'divisionLineY');
    
    // appends
    svg_graph.appendChild(dLineY[i]); 
  }
}

function stat(point){
  document.getElementById('reportPoint').innerHTML = '<h2>Point Proprieties</h2>\n\
          value = ' + (point.id.split('_')[1]) +
          '<br/>position = ' + (point.id.split('_')[3]) + ' of ' + sampleSize+
          '<br/>deviation = ' + (deviation[parseInt(point.id.split('_')[3]) - 1]);
}