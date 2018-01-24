<?php
/*
# The processing stage have __ phases.
#
# First, the data is getted by cookie
# and then generates in to "data objects"
#
# Second, occurs the dynamic creation of
# SVG elements (SVG and circle)
*/

/********** | PHASE 00 | **********
********** opens classes  *********/

// opens SVG
require_once "./class/SVG.php";
require_once "./class/SVGData.php";

// starts session
session_start();

/********** | PHASE 01 | **********
*********** SVG creation **********/

// define properties
$tag_name = 'svg';
$id = 'svg_graph';
$class_name = 'svgClass';
$namespace = 'http://www.w3.org/2000/svg';
$parent = 'document.getElementById("graph")';

// creates new SVG
$svgGraph = new SVG;

$svgGraph->set_tag_name($tag_name);
$svgGraph->set_id($id);
$svgGraph->set_class_name($class_name);
$svgGraph->set_namespace($namespace);
$svgGraph->set_parent_element($parent);

/********** | PHASE 02 | **********
********* data processing *********/

// recieves data
$data = $_COOKIE["graph_data"];

// turn data into array
$data = explode(",", $data);

// to dom use
$tag_name = 'circle';
$class_name = 'dataClassSVG';

// sample size
$sample = sizeof($data);
$_SESSION['sample'] = $sample;

// turn data in float and creates data element
for($i=0; $i<$sample-1; $i++){
   $val = floatval($data[$i+1]);
   
   $data[$i] = new SVGData;
   
   $data[$i]->set_tag_name($tag_name);
   $data[$i]->set_id($tag_name . $i  . '_' . abs($val) . '_' . ($i+1));
   $data[$i]->set_class_name($class_name);
   $data[$i]->set_parent_element($svgGraph->get_id());
   $data[$i]->set_namespace($namespace);
   
   $data[$i]->set_key_value($val);
   
   $_SESSION['dataGraph'][$i] = $data[$i]->to_dom();
}

/********** | PHASE 03 | **********
***********  stores data  *********/

$_SESSION['svgGraph'] = $svgGraph->to_dom();

/********** | PHASE 04 | **********
*********  calls next page  *******/

// calls graph.php
header("Location: ./graph.php");

?>
