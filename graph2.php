<!DOCTYPE html>
<html>
  <head>
    <title>Graphic</title>
    <meta charset='UTF-8'>
    <script src="js/graph.js"> </script>
    
    <style>
      svg{
          padding: 1%;
      }  
      
    </style>
  </head>
  
  <body>
    <p>Welcome to Graph</p>
    <div id='graph'>
      <p id='report'></p>
      <p id="reportPoint"></p>
      
    </div>
    
    <div id='conf-graph'>
        <form>
          <p>Offset X: <input type="range" id="oX" onchange="graph_offset()"/></p>
          <p>Offset Y: <input type="range" id="oY" onchange="graph_offset()"/></p>
          
          <p>Amplitude: <input type='number' id='ampl'/></p>
          <p>Internal Line Padding: <input type='number' min="0" id='linePadding' onchange="graph_lines()"/></p>
          
          
        </form>
    </div>
    

  </body>
</html>