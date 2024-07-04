/*
    1. what is return by setTimeout();
     -> timerID, which uniquely identify a timer, 
        so that you can reset by clearTimeout(timerID)
    2. What is a callback function ?
      Callback functions nowadays are replaced with promises and async/await . 
      It is a function that is passed as parameter to another function.
      Callback functions are used when there is an Asynchronous process to handle when result arrives.
    3. What is Asynchrnous Process?
       A process which takes some time to execute is an Asynchronus process, i.e. it 
       won't execute immediately.
  */
/*
let data;
function fetchData() {
  //faking api call with an async process
  setTimeout(() => {
    data = { pCode: 1001, pNmae: "Orange" };
  }, 2000);
}
function displayData() {
  console.log(data);
  console.log("Ends here");
}
console.log("Starts here");
fetchData();
displayData(); // here we want to display data after fetching the data ,this will give wrong answer
// bcs data will be undefined as fetch is an async process

*/
let data;
function fetchData(cb) {
  //faking api call with an async process
  setTimeout(() => {
    data = { pCode: 1001, pNmae: "Orange" };
    cb();
  }, 2000);
}
function displayData() {
  console.log(data);
  console.log("Ends here");
}
console.log("Starts here");
fetchData(displayData);
