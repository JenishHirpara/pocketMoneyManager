//console.dir(document);
//console.log(document.doctype);
//console.log(document.all);
//console.log(document.body);
//console.log(document.URL);
//console.log(document.document);
//console.log(document.cookie);

//console.log(document.getElementsByClassName('mainheading'));
//document.getElementsByClassName('mainheading').textContent='Hello';
//console.log(document.getElementsByClassName('mainheading'));
//document.getElementsByClassName('mainheading').innerText = 'Heloo';

//var newDiv = document.createElement('div');
//console.log(newDiv);

//var x = document.getElementsByClassName('inputstyle');
//console.log(x);

//var itemInput = document.getElementById('income');
//itemInput.addEventListener('keydown',runEvent);

//function runEvent(e){
 //document.getElementById('demo1').innerHTML = '<h3>' + e.target.value + '</h3>';
//}


var total = 0;
var i = 0;
var integer;
var y = new Array(20);


function func1(){
    var x = document.getElementById('income').value;
    document.getElementById('demo1').innerHTML = x ;
    document.getElementById('demo3').innerHTML = x -  document.getElementById('demo2').innerHTML  ;
    return x;
    
}


function func(){

    var x = func1();
    y[i] = document.getElementById('expense').value;
     integer=parseInt(y[i],10);
     

    total = total + integer;
    document.getElementById('demo2').innerHTML = total ;
    
    
   

    var z = x - total ;
    document.getElementById('demo3').innerHTML = z ;
    i++;


    var item = document.getElementById('expensetype').value;
    var text = document.createTextNode(item);
    var newItem = document.createElement('li');
    newItem.appendChild(text);
    document.getElementById('myUL').appendChild(newItem);
    //newItem.addEventListener('click',newItem.parentNode.removeChild(newItem));
    var close = document.getElementsByTagName("li");

    
    var k;
    for (k = 0; k < close.length; k++) {
      close[k].onclick = function Hello() {
      var div = this.style.display = "none";
      total = total - y[k];
      z = z + y[k];
      document.getElementById('demo2').innerHTML = total ;
      document.getElementById('demo3').innerHTML = z ;

      }
    } 
    
}






