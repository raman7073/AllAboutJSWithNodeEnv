/*
The global setTimeout() method sets a timer which executes a function or 
specified piece of code once the timer expires. 
The setTimeout() method returns the timeoutID.
The returned timeoutID is a positive integer value which identifies the timer 
created by the call to setTimeout().
This value can be passed to clearTimeout() to cancel the timeout.

*/

const t = 1000;
setTimeout(() => {
  console.log("in the timeout after printing after " + t + " seconds");
}, t);
const c = setTimeout(() => {
  console.log("in the timeout after printing after " + (t - 500) + " seconds");
}, t - 500);

console.log("this is the first log");
console.log(c);
