$(document).ready(function(){
  //var time=new Date().getTime(); <- get time in milliseconds

  var s,
  bt=5,
  st=25,
  Timer = {
	  
	  settings: {
      clock:$(".clock"),
		  buttons:$(".timerset"),  //strictly for responsive design
			sessionAdj:$(".stadj"),
			breakAdj:$(".btadj"),
      breakTime:$("#breaktime"),
      sessionTime:$("#sessiontime"),
      clockStatus:$("#clockstatus"),
      countdown:$("#alarm"),
      status:null,
      timing:null,
      countdownTime:null,
      elapsedTime:0,
      startTime:null,
      stopTime:null,
      interval:null
	  },
	  
	  init: function() {
		  s=this.settings;
      s.breakTime.text(bt);
      s.sessionTime.text(st);
      Timer.setAlarm(st);
      Timer.setStatus();
		  this.bindUIActions();
	  },
	  
	  bindUIActions: function() {
      //adjust session length
		  s.sessionAdj.on("click", function() {
        var val=$(this).attr("value");
			  Timer.setSession(val);
		  });
      //adjust break length
      s.breakAdj.on("click", function() {
        var val=$(this).attr("value");
			  Timer.setBreak(val);
		  });
      //start/stop
      s.clock.on("click", function() {
        if (!s.timing) {
          Timer.setStartTime();
          Timer.setCountDown();
          s.timing=true;
          Timer.convert(s.countDownTime);
          Timer.start(s.countDownTime);
        } else {
          Timer.setStopTime();
          Timer.stop();
          s.timing=null;
          Timer.setElapsed();
        }
      });
      //superficials
      s.buttons.mousedown(function() {
        $(this).addClass("adjpressed");
      });
      s.buttons.mouseup(function() {
        $(this).removeClass("adjpressed");
      });
      s.buttons.mouseout(function() {
        $(this).removeClass("adjpressed");
      });
      
	  },
    
    setSession: function(x) {
      if (!s.timing) {
        if (x=="plus") {
          st++;
        } else if (st>1) {
          st--;
        }
        s.sessionTime.html(st);
        if (s.status=="Session") {
          s.elapsedTime=0;
          Timer.setAlarm(st);
        }
      }
    },
    
    setBreak: function(x) {
      if (!s.timing) {
        if (x=="plus") {
          bt++;
        } else if (bt>1) {
          bt--;
        }
        s.breakTime.html(bt); 
        if (s.status=="Break") {
          s.elapsedTime=0;
          Timer.setAlarm(bt);
        }
      }
    },
    
    start: function(x) {
      var disp=x;
      s.interval=setInterval(function(){
        disp-=1000;
        if (disp>=0) {
          Timer.convert(disp);
        } else {
          Timer.stop();
          Timer.reset();
        }
      }, 1000);
    },
    
    stop: function() {
      clearInterval(s.interval);
    },
    
    setStatus: function() {
      if (!s.status||s.status=="Break") {
        s.status="Session";
      } else {
        s.status="Break";
      }
      s.clockStatus.html(s.status);
    },
    
    setAlarm: function(val) {
      s.countdown.html(val);
    },
    
    setStartTime: function() {
      var start;
      start=new Date().getTime();
      s.startTime=start;
    },
    
    setStopTime: function() {
      var stop;
      stop=new Date().getTime();
      s.stopTime=stop;
    },
    
    setCountDown: function() {
      if (s.status=="Session") {
        s.countDownTime=(st*60000)-s.elapsedTime;
      } else {
        s.countDownTime=(bt*60000)-s.elapsedTime;
      }
    },
    
    convert: function(x) {
      var mm=("0"+Math.floor(x/60000)).slice(-2);
      var ss=("0"+Math.floor((x%60000)/1000)).slice(-2);
      Timer.setAlarm(mm+":"+ss);
    },
    
    setElapsed: function() {
      s.elapsedTime+=(s.stopTime-s.startTime);
    },
    
    reset: function() {
      s.elapsedTime=0;
      Timer.setStatus();
      Timer.setCountDown();
      s.timing=true;
      Timer.convert(s.countDownTime);
      Timer.start(s.countDownTime);
    }
    
  };
  
  Timer.init();
  
});