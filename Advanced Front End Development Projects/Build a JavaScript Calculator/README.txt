Codepen - http://codepen.io/jesser702/pen/LymzYe

Challenge here - https://www.freecodecamp.com/challenges/build-a-javascript-calculator

1.  Uploading what I have so far.  Laid out buttons, classed buttons, scripted number buttons to inject their value into the window, defined math functions.  Researching to figure out how to store mathematical operations in order to chain them together after equal sign ins pressed.

2.  Set object and prototyped add/subtract/multiply/divide functions.  Operator buttons pushing numbers and operator button values into entries array, setting initial value when initial value for myNum is not set, then using equals button to iterate through the array using a switch case to pick up operators and perform prototype functions.  Not working so far.  Able to get the iterator to show entry value at index, index+1.  Unable to get the operations to save their affects on myNum._val, as after iteration finishes, myNum._val is still the initial value as set by the first operation button click.

2.1 Figured out what I was doing wrong from update 2.  Equals button was not adding current value to entries array.  Need to fix functions as hitting the equals button then trying to add doubles the result of the first equals button total.  Ex: 10+20=21,+10=52. <- should be 31.

3. Calculator is functional.  Added function for percent button, handled passing of totals through equals operation so that it can be immediately operated on, or it can be replaced with a different number to start a new equation.  Added display of full equation that updates as numbers and operations are entered.  Will have to work on aesthetic later (i.e. long + key, getting both current number and full equation in the display window).

4.  Changed calculator appearance, added button response.  + button was elongated.  Enlarged window and full equation displays.  AC and CE buttons work as they should.  Spent an especially long time on the CE button functionality logic.