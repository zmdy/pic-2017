<!DOCTYPE html>
<html>
  
  <head>
    <title>Arduino Graphic</title>
    
    <meta charset='UTF-8'>
    
    <script src='js/utils.js'></script>
    <script src='js/graph.js'></script>
    <script src='js/colors.js'></script>
    <script src='js/graph-controls.js'></script>
    <script src='js/graph-process.js'></script>
    <script src='js/class/SVGData.js'></script>
    
    <link rel='stylesheet' href='css/style.css' type='text/css'/>
  </head>
  
  <body>
    <div id='graph'>
    </div>
    
     <div id='conf-graph'>
        <p id='pointStatus'>PROPERTIES: </p>
        <form>
          <p>Offset X: <input type='range' id='oX' value=0 onchange='refresh_graph()'/></p>
          <p>Offset Y: <input type='range' id='oY' value=0 onchange='refresh_graph()'/></p>
          
          <p>Amplitude: <input type='number' id='amplitude' value=100 onchange='refresh_graph()'/></p>
          <p>Lateral Amplitude: <input type='number' id='lateralAmplitude' value=100 onchange='refresh_graph()'/>
            <input type="button" id="autoAmplitude" value="Auto Calculate Value" onclick="set_lateral_amplitude()"/>
          </p>
          
          <p>xSpace: <input type='number' id='xSpace' value=100 onchange='refresh_graph()'/> </p>
          <p>ySpace: <input type='number' id='ySpace' value=100 onchange='refresh_graph()'/> </p>
        </form>
        <p id='graphStatus'></p>
    </div>
    
    <?php
      // starts session use
      session_start();
      
      // creates the script tag with DOM SVG
      echo "
      \n\t<script>" .
        $_SESSION['svgGraph'];
        
        echo "\n\tdata_points = [];";
        
      for($i=0; $i< $_SESSION['sample']; $i++){
        echo "\n\n\tdata_points[$i] = " .
              $_SESSION['dataGraph'][$i];
        
      }
            
      echo "\n\t</script>\n";
      
    ?>
  </body>
</html>