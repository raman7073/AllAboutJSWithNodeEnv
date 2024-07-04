/* 
  Passing an invalid ID to clearTimeout() silently does nothing; no exception is thrown.
*/

const t = 1000;
firstTimer = setTimeout(() => {
  console.log("in the timeout after printing after " + t + " seconds");
}, t);

const stopTimer = () => {
  clearTimeout(firstTimer);
  console.log("timeout cleared");
};
stopTimer();
// const secondTimer = setTimeout(() => {
//   console.log("in the timeout after printing after " + (t - 500) + " seconds");
// }, t - 500);
console.log("this is the first log");
