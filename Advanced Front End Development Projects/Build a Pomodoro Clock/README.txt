FreeCodeCamp Challenge - https://www.freecodecamp.com/challenges/build-a-pomodoro-clock

Codepen - http://codepen.io/jesser702/pen/bWyarK

1.	5/29/17 - Created basic layout.  Set display initializations.  Set button click functions.

2.  5/30/17 - Set clock click function to set a 1 second interval function.  Need to figure out how to handle switching between the session and break timers - reset time variable to session/break's initial value when time number ticks down to zero.

2.1 Got countdown timer to change status from Session to Break and vice versa, resetting to each respective time values.  Session/Break time adjustments disabled while timer is running; also set lower limit for Break/Session times.  Timer now displays in a MM:SS format.  Up next - click to pause timer if timing, save state of timer, click while paused to continue timing.  After that - add 1 checkmark per session completed; set longer break if 4 checkmarks attained.