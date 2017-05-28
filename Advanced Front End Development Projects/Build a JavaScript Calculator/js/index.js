$(document).ready(function(){
  // define variables
  var entries;
  var myNum;
  var currval;
  var storedval;
  var total;
  var lasttotal;
  
  // initializer
  function init() {
    entries=[];
    myNum=undefined;
    currval=undefined;
    storedval=undefined;
    total=0;
    
  // set initial window displays
    $("#current").text(0);
    $("#full").text(0);
  }
  
  //initialize
  init();
  
  //test here
  
  //define math functions
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
    this._val=this._val/divn;
    return this;
  }
  
  MyNum.prototype.multiply = function(multn) {
    this._val=this._val*multn;
    return this;
  }
  
  // button pushes
  $(".button").mousedown(function() {
    $(this).addClass("pressed");
  });
  $(".button").mouseup(function() {
    $(this).removeClass("pressed");
  });
  $(".button").mouseout(function() {
    $(this).removeClass("pressed");
  });
  
  // clear buttons
  $(".cbutton").click(function(){
    // ac
    if ($(this).attr("value")==="ac") {
      init();
      lasttotal=undefined;
    // ce
    /*  ce button
      if entries length is 1 or less, initialize
      else if current is not zero,
        if typeof last entry is an operation, zero current, full = entries +' '+0
        else typeof if last entry is a number 
          if last entry is not zero, set last entry to 0, full = entries
          else if last entry is zero, pop last entry, full = entries +' '+0
      else typeof if current is zero,
        if last entry is an operation, pop end of entries, set current to last entry, set full to entries 
        if last entry is a number, pop end of entries, set full to entries +' ' + 0
    */  
    } else if ($(this).attr("value")==="ce") {
      if (entries.length<=1||entries==[]) {
        init();
        lasttotal=undefined;
      } else if ($("#current").text()!=0) {
        if (typeof entries[entries.length-1]!="number") { /*dostuff*/ 
          $("#current").text(0);
          $("#full").text(entries.join(' ')+' '+0);
        }
        else if (typeof entries[entries.length-1]=="number") {
          if (entries[entries.length-1]!=0) {/*dostuff*/
            entries[entries.length-1]=0;
            $("#current").text(0);
            $("#full").text(entries.join(' '));
          }
          else if (entries[entries.length-1]==0) {/*dostuff*/
            entries.pop();
            $("#current").text(0);
            $("#full").text(entries.join(' ')+' '+0);
          }
        }
      } else if ($("#current").text()==0) {
        if (typeof entries[entries.length-1]=="number") {
          if (entries[entries.length-1]!=0) {/*dostuff*/
            entries[entries.length-1]=0;
            $("#current").text(0);
            $("#full").text(entries.join(' '));
          } else {
            entries.pop();
            entries.pop();
            $("#current").text(entries[entries.length-1]);
            $("#full").text(entries.join(' '));
          }
        } else if (typeof entries[entries.length-1]!="number") {
          alert('current is 0, last entry is not a number');
          entries.pop();
          $("#current").text(entries[entries.length-1]);
          $("#full").text(entries.join(' '));
        }
      }
    }
  });
  
  // number buttons
  $(".nbutton").click(function(){
    var value = $(this).attr("value");
    var current = $("#current").text();
    if ($("#current").text()==0&&$("#current").text().length<2||($("#current").text()==lasttotal&&entries.length<1)) {
      $("#current").text(value);
    } else if (current.length<13) {
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
    if (typeof storedval!="undefined") {
      currval = parseFloat($("#current").text());
      currval = storedval*(currval/100);
      $("#current").text(currval);
    }
  });
  // equals button
  $(".ebutton").click(function(){
    total=0;
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
    if (myNum._val.toString().length>12) {
      myNum._val=parseFloat(myNum._val.toString().substr(0,13));
    }
    lasttotal=myNum._val;
    init();
    $("#current").text(lasttotal);
  });
  
  event.preventDefault();
});