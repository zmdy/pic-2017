<?php
// opens SVG
require_once "./class/SVG.php";

// general properties
$tag_name = 'SVG';
$id = 'svgGraph';
$class_name = 'svgClass';
$namespace = 'http://www.w3.org/2000/svg';
    
// creates new SVG
$svgGraph = new SVG;

$svgGraph->set_tag_name($tag_name);
$svgGraph->set_id($id);
$svgGraph->set_class_name($class_name);
$svgGraph->set_namespace($namespace);


// shows svgGraph
echo $svgGraph->to_html();

echo $svgGraph->to_dom();



?>
