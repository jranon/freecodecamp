$(document).ready(function(){
  
  var total=0;
  var entries=[];
  if (entries.length==0) {
    display=0;
  } else {
    display=entries.join('');
  }
  $("#current").text(total);
  
  function myNum(value) {
    this._val=value;
  }
  
  myNum.prototype.add = function(x) {
     return x+myNum._val;
  }
  
  function subtract(x) {
    return function(y) {
      return x-y;
    }
  }
  
  function divide(x) {
    return function(y) {
      return x/y;
    }
  }
  
  function multiply(x) {
    return function(y) {
      return x*y;
    }
  }
  
  $(".cbutton").click(function(){
    $("#current").text(0);
  });
  
  $(".nbutton").click(function(){
    var value = $(this).attr("value");
    var current=$("#current").text();
    
    if (current==0) {
      $("#current").text(value);
    } else {
      $("#current").text(current+''+value);
    } 
  });  
  
  $(".obutton").click(function(){
    var currval = parseFloat($("#current").text());
    $("#current").text(0);
    var operation = $(this).attr("value");
    switch(operation) {
      case "plus":
        answer=add(total)(currval);
        total+=answer;
        $("#current").text(0);
        break;
      case "subtract":
        answer=add(total)(currval);
        total+=answer;
        $("#current").text(0);
        break;
      case "divide":
        if (answer==0) {
          
        } else {
          answer=divide(total)(currval);
          total+=answer;
          $("#current").text(0);
        }
        break;
      case "multiply":
        answer=add(total)(currval);
        total+=answer;
        $("#current").text(0);
        break;
    }
    
  });
  
});