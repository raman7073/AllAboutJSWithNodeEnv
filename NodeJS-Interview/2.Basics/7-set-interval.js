/*
The setInterval() method,repeatedly calls a function or executes a code snippet, 
with a fixed time delay between each call.
It returns an intervalID.
The returned intervalID is a numeric, non-zero value which identifies the timer
created by the call to setInterval();
this value can be passed to clearInterval() to cancel the interval.

*/

// let i = 1;
// const timerObj = setInterval(() => {
//   console.log(i);
//   i++;
//   if (i === 5) {
//     clearInterval(timerObj);
//   }
// }, 1000);
const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

function myCallback(a, b) {
  // Your code here
  // Parameters are purely optional.
  console.log(a);
  console.log(b);
}
clearInterval(intervalID);
