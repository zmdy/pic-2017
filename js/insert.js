/*
  criar cookies para enviar para
  banco de dados e process.php
*/


var lastValue = 0,
    lastChecked = 0,
    tableData = document.createElement('table'),
    trData = [],
    tdData = [],
    inputData = [],
    hideStatus = 1;

window.onload =  reload;

// function create

function reload(){
  // check if data are unique
  var checked = document.getElementById('unique').checked==true ? 1 : 2,
      // recieves 1 if 'unique' is checked and 2 if not ('matched')
      size = document.getElementById('size').value;
      
      
      document.getElementById('btnSubmit').style.display =
              size>0 ? 'inline-block' : 'none';
  
  if(size != lastValue){ // if some change happened
    /*
       foreach possible type of checked
       there are 2 different ways of update de
       tableData:
       1: create new data
       2: remove data

       The process of creation an remotion are very similar
       in both cases. Therefore, to reduce algorithm complexity and simplify the code,
       everything is going to be made in a single statement
     */
    
    

     if(size > lastValue){
       /* if the current number of data is bigger than last one
         is necessary:

         1: verify the type of checked

         a) if type is unique, is necessary create
         size-lastValue) new tr and td elements

         b) if it is multiple, is necessary create
            (size-lastValue) new tr elements
            and 2*(size-lastValue) new td and input elements
       */
       for(i=lastValue; i<size; i++){
         // create tr
         trData[i] = document.createElement('tr');

         if(checked == 2){
           // checked equals 2
           tdData[i] = [checked];
           inputData[i] = [checked];

           for(j=0; j<checked; j++){
             // creates td
             tdData[i][j] = document.createElement('td');

             // creates input
             inputData[i][j] = document.createElement('input');
             inputData[i][j].type = 'number';

             // give the class names
             if(j==0){
              tdData[i][j].className = 'tdX';
              inputData[i][j].className = 'xData';
             }

             // appends elements
             trData[i].appendChild(tdData[i][j]);
             tdData[i][j].appendChild(inputData[i][j]);
           }
         } else{
           // creates td
           tdData[i] = document.createElement('td');
           tdData[i].className = 'tdData';

           // creates input
           inputData[i] = document.createElement('input');
           inputData[i].type = 'number';
           inputData[i].className = 'inputData';

           // appends elements
           trData[i].appendChild(tdData[i]);
           tdData[i].appendChild(inputData[i]);
         }

         // appends tr
         tableData.appendChild(trData[i]);
       }
     }
     else if(size < lastValue){
       /* if the current number of data is lower than last one
         is necessary just remove the last (lastValue - size)
         tr elements
       */
       for(i=lastValue-1; i>=size; i--){
         trData[i].remove(trData[i].selectedIndex);
       }
     }
    // make values equal
    lastValue = size;
    lastChecked = checked;

    // appends table
    tableData.name = 'data';
    document.getElementById('manual-insertion').appendChild(tableData);
  }

}

function hideType(){
  hideDisplay = hideStatus == 0 ? 'none' : 'inline-block';
  document.getElementById('btnResch').style.display = hideDisplay;
  document.getElementById('btnCreate').style.display = hideDisplay;
  document.getElementById('size').style.display = hideDisplay;
  document.getElementById('size').value = 0;


  hideStatus = !hideStatus;
  hideDisplay = hideStatus == 0 ? 'none' : 'inline-block';

  hideElement = document.getElementsByClassName('inputType');

  for(i=0; i<hideElement.length; i++){
    hideElement[i].style.display = hideDisplay;
  }

  // removes table
  tableData.remove(tableData.selectedIndex);

  // reload
  reload();
}

function submitData(){
    var data = [];
    
    /*
     the 'data' cookie is a array of length = inputData.length + 1,
     which firs position data[0] is equals to lastChecked (1 or 2),
     where 1 means 'sequential' and 2 'matched'
     */
    data[0] = lastChecked;
            
    if(lastChecked == 1){
        for(i=0; i<inputData.length; i++){
            data[i+1] = parseFloat(inputData[i].value);
        }
    } else{
        for(i=0; i<inputData.length; i++){
            data[i+1] = [2];
            for(j=0; j<inputData[i].length; j++){
                data[i+1][j] = parseFloat(inputData[i][j].value);
            }
        }
    }
    
    data = document.cookie = 'graphData='+data;
    console.log(data);
    window.location ='process.php';
    
    
}
