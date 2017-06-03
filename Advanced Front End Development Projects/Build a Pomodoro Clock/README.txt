FreeCodeCamp Challenge - https://www.freecodecamp.com/challenges/build-a-pomodoro-clock

Codepen - http://codepen.io/jesser702/pen/bWyarK

1.	5/29/17 - Created basic layout.  Set display initializations.  Set button click functions.

2.  5/30/17 - Set clock click function to set a 1 second interval function.  Need to figure out how to handle switching between the session and break timers - reset time variable to session/break's initial value when time number ticks down to zero.

2.1 Got countdown timer to change status from Session to Break and vice versa, resetting to each respective time values.  Session/Break time adjustments disabled while timer is running; also set lower limit for Break/Session times.  Timer now displays in a MM:SS format.  Up next - click to pause timer if timing, save state of timer, click while paused to continue timing.  After that - add 1 checkmark per session completed; set longer break if 4 checkmarks attained.

3.  Got timer to work.  Spent a chunk of time trying to get the stop function to work (setInterval was in a separate, start function).  After that, setting interval to begin where it left off after stopping and starting again was the issue.  The millisecond math needed to be adjusted so that the conversion to seconds didn't error out when adjusting countdown after first stop.  This was solved by using Math.floor.  After that, changed up the interface.  Extra work for later: set pomodoro counts (after 4 sessions, set longer break without making changes to set break time and reset pomodoro count to 0), make colon in mm:ss flash to indicate the clock is timing (superficial), change clock color according to whether it's in session or break, and as timer gets closer to 0, do something to get attention (superficial).