<?php
// recieves data
$data = $_COOKIE["graphData"];

// turn data into array
$data = explode(",", $data);

// verify type of insertion ( 1 = SEQUENTIAL; 2 = MULTIPLE)
$type = $data[0];

// turn data in float
for($i=1; $i<sizeof($data); $i++)
    $data[$i] = floatval($data[$i]);

// statistical analysis
/*
The statistical analysis will be made
in the current account logged, saving the data:
1) $data (cookie)
2) avarage
3) min, max, amplitude
4) standar deviation
*/

// send results do database

// call graph.php
header("Location: ./graph.php");

?>
