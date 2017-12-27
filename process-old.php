  <?php
// generic functions
function print_data($data){
  if(is_array($data[0])){
    for($i=0; $i<sizeof($data); $i++){
      echo "
      <li class='data'>";
      for($j=0; $j<sizeof($data[$i]); $j++){
        echo $data[$i][$j];
        for($k=0; $k<sizeof($data[$j]); $k++){
          echo $data[$i][$j][$k];
        }
        echo "  ";
      }
      echo "
      </li>";
    }
  } else{
    for($i=0; $i<sizeof($data); $i++){
      echo "
      <li class='data'>";
      for($j=0; $j<strlen($data[$i]); $j++){
        echo $data[$i][$j];
      }
      echo "
      </li>";
    }
  }
}

// start the session
session_start();

// open css
echo "<link rel='stylesheet' type='text/css' href='./css/process.css'/>";

// get values received
$data = $_SESSION['return_data'];

if(!is_null($data)){
  echo "
  <p class='status_correct'>Data Received</p>
  <table>
    <caption>Data Status</caption>

    <tr>
      <th>Type</th>
      <th>Value</th>
    </tr>

    <tr>
      <td>Matrix</td>
      <td>" . (is_array($data[0]) ? "YES" : "NO") . "</td>
    </tr>

    <tr>
      <td>Array Size</td>
      <td>" . sizeof($data) . "</td>
    </tr>

    <tr>
      <td>Column Size</td>
      <td>" . sizeof($data[0]) . "</td>
    </tr>
  </table>
  ";

  print_data($data);

} else{
    echo"
      <p class='status_error'>No Data Received</p>
      <p id='redirect'>Redirect to <a href='./manual-insertion.html'>Manual Insertion</a></p>";
}
?>
