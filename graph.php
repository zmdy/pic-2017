<!DOCTYPE html>
<html>
  
  <head>
    <title>Arduino Graphic</title>
    <meta charset='UTF-8'>
    <script src='js/utils.js'></script>
    <script src='js/graph.js'></script>
    <script src='js/svg.js'></script>
    <script src='js/graph-process.js'></script>
    <link rel='stylesheet' href='css/style.css' type='text/css'/>
  </head>
  
  <body>
    <div id='graph'>

    </div>
    
     <div id='conf-graph'>
        <form>
          <p>Offset X: <input type='range' id='oX' onchange='set_offset_value()'/></p>
          <p>Offset Y: <input type='range' id='oY' onchange='set_offset_value()'/></p>
          
          <p>Amplitude: <input type='number' id='ampl'/></p>
          <p>Lateral Amplitude: <input type='number' id='latAmpl'/></p>
        </form>
        
        <p id='offsetData'></p>
        <p id='graphData'></p>
    </div>
    
    <?php
      // starts session use
      session_start();
      
      // creates the script tag with DOM SVG
      echo $_SESSION['svgGraph'];
      
    ?>
  </body>
</html>