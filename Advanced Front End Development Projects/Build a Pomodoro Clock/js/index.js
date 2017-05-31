$(document).ready(function(){
  // 1000 milliseconds to 1 second
  // 60000 milliseconds to 1 minute
  // 600000 milliseconds to 1 hour
  var st=25;
  var bt=5;
  var status=true;
  var timing;
  
  function setSessionDisplay() {
    $("#sessiontime").text(st);
  }
  
  function setBreakDisplay() {
    $("#breaktime").text(bt);
  }
  
  function setStatus() {
    if (!status) {
      status=true;
    } else {
      status=null;
    }
  }
  
  function setStatusDisplay() {
    if (status) {
      $("#status").text("Session");
    } else {
      $("#status").text("Break");
    }
  }
  
  function setTimerStatus() {
    if (timing) {
      timing=null;
      alert(timing);
    } else {
      timing=true;
      alert(timing);
    }
  }
  
  function setAlarmDisplay() {
    if (status) {
      $("#alarm").text(st);
    } else {
      $("#alarm").text(bt);
    } 
  }
  
  function setTimerDisplay(val) {
    var mm=("0" + Math.floor(val/60)).slice(-2);
    var ss=("0" + (val%60)).slice(-2);
    $("#alarm").text(mm+':'+ss);
  }
  
  function init() {
    setSessionDisplay();
    setBreakDisplay();
    setStatusDisplay();
    setAlarmDisplay();
  }
  
  init();
  
  // buttons
  $("button").click(function(){
    if (!timing) {
      if ($(this).attr("class")=="plus") {
        if ($(this).parent().attr("id")=="break") {
          bt++;
          setBreakDisplay();
          if (!status) {
            $("#alarm").text(bt);
          }
        } else {
          st++;
          setSessionDisplay();
          if (status) {
            $("#alarm").text(st);
          }
        }  
      } else {
        if ($(this).parent().attr("id")=="break") {
          if (bt>1) {
            bt--;
            setBreakDisplay();
            if (!status) {
              $("#alarm").text(bt);
            }
          }
        } else {
          if (st>1) {
            st--;
            setSessionDisplay();
            if (status) {
              $("#alarm").text(st);
            }
          }
        }
      }
    }
  });
  
  // timer function
  function timer(val1, val2) {
    var counter;
    if (status) {
      counter=val1;
    } else {
      counter=val2;
    }
    setTimerDisplay(counter);
    var timetime = setInterval(timeIt, 1000);
    function timeIt() {
      if (counter>0) {
        counter--;
        setTimerDisplay(counter);
      } else {
        setStatus();
        setStatusDisplay();
        setAlarmDisplay();
        clearInterval(timetime);
        timer(val1, val2);
      }
    }
  }
  
  // clock
  $(".clock").click(function(){
    var sTime=st*60;
    var bTime=bt*60;
    if (status) {
      time=st;
    } else {
      time=bt;
    }
    
    setTimerStatus();
    
    
    if (timing) {
      timer(sTime, bTime);
      /*if (status) {
        setInterval(function(){
          st--;
          $("#sessiontime").text(st);
        },1000);
      } else {
        setInterval(function(){
          bt--;
          $("#breaktime").text(bt);
        },1000);
      }*/
    }
  });
  
  /* .clock#alarm
    timer .click function 
      Set countdown starting number (timernumber) as .timerset#session*1000
      // convert number to mm:ss
      var mm = ("0" + Math.floor(timernumber/60000).toString()).slice(-2);
      if (mm<10) {
        mm=
      }
      var ss = ("0" + (timernumber%60000)/6000.toString()).slice(-2);
      // set display as mm:ss
      $()
      set toggle functions
        set timing to true 
        set timing to false
      while timernumber > 0
        if (timing) {
          setInterval(function(){timernumber-=1000;}, 1000);
        } 
      
      
      
      
  */
  
  /*function cdisplay(minutes) {
    var time = minutes*60000;
    setInterval(function(){alert(time+" milliseconds have passed");}, time)
  }
  
  cdisplay(1);*/
  
  //setInterval(function(){alert("thing");}, 5000);
  
});