$(document).ready(function(){
  // define variables
    var entries=[];
    var myNum;
    var currval;
    var storedval;
    var total=0;
  
  function init() {
    entries=[];
    myNum;
    currval;
    storedval;
    total=0;
    
    // set initial window value
    $("#current").text(total);
    $("#full").text(0);
  }
  
  init();
  
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
  
  
  // clear buttons
  $(".cbutton").click(function(){
    if ($(this).attr("value")==="ac") {
      init();
    } else if ($(this).attr("value")==="ce"&&$("#current").text()==0) {
      entries.pop();
    }
    $("#current").text(0);
  });
  
  // number buttons
  $(".nbutton").click(function(){
    var value = $(this).attr("value");
    var current = $("#current").text();
    if ($("#current").text()==0||(total>0&&entries.length<1)) {
      $("#current").text(value);
    } else {
      $("#current").text(current+''+value);
    }
    current = $("#current").text();
    $("#full").text(entries.join(' ')+' '+current);
  });
  
  // operation buttons
  $(".obutton").click(function(){
    currval = parseFloat($("#current").text());
    $("#current").text(0);
    var operation = $(this).attr("value");
    entries.push(currval);
    entries.push(operation);
    if (myNum===undefined&&currval!=0) {
      myNum=new MyNum(currval);
    }
    storedval=currval;
    $("#full").text(entries.join(' '));
  });
  
  // percent button
  $(".pbutton").click(function(){
    if (storedval!=="undefined") {
      currval = parseFloat($("#current").text());
      currval = storedval*(currval/100);
      $("#current").text(currval);
    }
  });
  // equals button
  $(".ebutton").click(function(){
    currval = parseFloat($("#current").text());
    if (typeof entries[entries.length-1]!=="number"&&currval!=0) {
      entries.push(currval);
    } else if (currval==0) {
      entries.pop();
    }
    var i=1;
    while (i<entries.length) {
      switch (entries[i]) {
        case "+":
          myNum.add(entries[i+1]);
          i++;
          break;
        case "-":
          myNum.subtract(entries[i+1]);
          i++;
          break;
        case "÷":
          myNum.divide(entries[i+1]);
          i++;
          break;
        case "x":
          myNum.multiply(entries[i+1]);
          i++;
          break;
        default:
          i++;
          break;
      }
    }
    init();
    total+=myNum._val;
    $("#current").text(total);
  });
  
  e.preventDefault();
});