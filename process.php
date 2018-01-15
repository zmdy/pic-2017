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

// starts session
session_start();

/********** | PHASE 01 | **********
********* data processing *********/

// recieves data
$data = $_COOKIE["graph_data"];

// turn data into array
$data = explode(",", $data);

// verify type of insertion ( 1 = SEQUENTIAL; 2 = MULTIPLE)
$type = $data[0];

// turn data in float
for($i=1; $i<sizeof($data); $i++)
    $data[$i] = floatval($data[$i]);

/********** | PHASE 02 | **********
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

/********** | PHASE 03 | **********
***********  stores data  *********/

$_SESSION['svgGraph'] = $svgGraph->to_dom();

/********** | PHASE 04 | **********
*********  calls next page  *******/

// calls graph.php
header("Location: ./graph.php");

?>
