$(document).ready(function(){
  // 1000 milliseconds to 1 second
  // 60000 milliseconds to 1 minute
  // 600000 milliseconds to 1 hour
  var st=25;
  var bt=5;
  var status=true;
  var timing=false;
  
  function setSessionDisplay() {
    $("#sessiontime").text(st);
  }
  
  function setBreakDisplay() {
    $("#breaktime").text(bt);
  }
  
  function setStatus() {
    if (status===true) {
      $("#status").text("Session");
    } else {
      $("#status").text("Break");
    }
  }
  
  function setAlarmDisplay(num) {
    $("#alarm").text(num);
  }
  
  function init() {
    setSessionDisplay();
    setBreakDisplay();
    setStatus();
    setAlarmDisplay(st);
  }
  
  init();
  
  // buttons
  $("button").click(function(){
    if ($(this).attr("class")=="plus") {
      if ($(this).parent().attr("id")=="break") {
        bt++;
        setBreakDisplay();
      } else {
        st++;
        setSessionDisplay();
      }  
    } else {
      if ($(this).parent().attr("id")=="break") {
        bt--;
        setBreakDisplay();
      } else {
        st--;
        setSessionDisplay();
      }
    }
  });
  
  // clock
  $(".clock").click(function(){
    if (timing) {
      timing=false;
      alert(timing);
    } else {
      timing=true;
      alert(timing);
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