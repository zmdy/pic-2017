<?php

$fileName = 'channelFile';
$file = $_FILES[$fileName]['tmp_name'];
$delim = "\n";

// header
echo "<script src='js/process.js'></script>";

// resets cookies
setcookie('graph_data');
setcookie('channels');
setcookie('channel_size');

/** OPENS TEMPORARY FILE **/
$handle = fopen($file, 'r') or die("DEU RUIM AGAIN");

// explodes the file
$read = explode($delim, fread($handle, filesize($file)));

// creates cookie 'graph_data'
$graph_data = [];


for($i=0; $i<sizeOf($read); $i++){
  $val = floatval($read[$i]);
  $graph_data[$i] = $val;
}

// turn in to string
$graph_data = implode($graph_data, ', ');

// creates the cookie
echo "
\n<script>
\n\tcreateDataCookies('graph_data', '" . $graph_data . "');\n
\n\tsetChannelSize("  . ($i-1) .  ");" .
"\n</script>
\n<p>Wait...</p>";
?>