<?php
class Statistics {
  // define properties
  private $statistic_data;
  public $average;
  public $variance;
  public $standard_deviation;
  
  // define setters
  public function set_statistics_data($statistic_data){
    $this->statistic_data = $statistic_data;
  }
  
  // define getters
  public function get_statistic_data():StatisticsObject {
    return $this->statistic_datastatistic_data;
  }
  
  public function get_average():float {
    return $this->average;
  }
  
  public function get_variance():float {
    return $this->variance;
  }
  
  public function get_standard_deviation():float {
    return $this->standard_deviation;
  }
  
  // define calculus
  
}
