$(document).ready(function(){
  // define variables
  var total=0;
  var entries=[];
  var myNum;
  
  //define functions
  function MyNum(value) {
    this._val = value;
  }
  
  MyNum.prototype.add = function(addn) {
      this._val+=addn;
    return this;
  }
  
  MyNum.prototype.subtract = function(subn) {
      this._val-=subn;
    return this;
  }
  
  MyNum.prototype.divide = function(divn) {
    this._val/=divn;
    return this;
  }
  
  MyNum.prototype.multiply = function(multn) {
    this._val*=multn;
    return this;
  }
  
  // page manipulation and interactions
  // set initial window value
  $("#current").text(total);
  // clear buttons
  $(".cbutton").click(function(){
    
    if ($(this).attr("value")==="ac") {
      entries = [];
      alert(entries);
    } else if ($(this).attr("value")==="ce"&&$("#current").text()==0) {
      entries.pop();
      alert(entries);
    }
    $("#current").text(0);
  });
  // number buttons
  $(".nbutton").click(function(){
    var value = $(this).attr("value");
    var current=$("#current").text();
    if (current==0) {
      $("#current").text(value);
    } else {
      $("#current").text(current+''+value);
    } 
  });  
  // operation buttons
  $(".obutton").click(function(){
    var currval = parseFloat($("#current").text());
    $("#current").text(0);
    var operation = $(this).attr("value");
    entries.push(currval);
    entries.push(operation);
    if (myNum===undefined&&currval!=0) {
      myNum=new MyNum(currval);
    }
  });
  // equals button
  $(".ebutton").click(function(){
    var i=1;
    if (typeof entries[entries.length-1]!=="number") {
      entries.pop();
    }
    while (i<entries.length) {
      switch (entries[i]) {
        case "plus":
          myNum.add(entries[i+1]);
          i++;
          break;
        case "subtract":
          myNum.subtract(entries[i+1]);
          i++;
          break;
        case "divide":
          myNum.divide(entries[i+1]);
          i++;
          break;
        case "multiply":
          myNum.divide(entries[i+1]);
          i++;
          break;
        default:
          i++;
          break;
      }
    } 
    console.log(myNum._val);
  });
});