/* 
Basic Statistic Calculations
 */

/* 
Basic Statistic Calculations
 */

function statisticsProcess(){
  // defines statData
  var statData = new Statistics(data_points);  
  
  // calcs variables
  statData.StatisticReport();
  
  // report
  out = 
      'size_sample = ' + statData.size +
      ' | avarage = ' + statData.avr +
      ' | min = ' + statData.min +
      ' | max = ' + statData.max +
      ' | variance = ' + statData.variance +
      ' | &sigma; = ' + statData.s_deviation +
      ' | variation_coefficient = ' + statData.var_coef;
      //'\ndeviation = ' + statData.deviation;
  
  // shows
  document.getElementById('statReport').innerHTML = out;
}
