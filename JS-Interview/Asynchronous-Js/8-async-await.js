/*
  The await keyword inside an async function pauses the function's execution until 
  the promise it's placed before is resolved. In JavaScript, 
  the non-blocking nature ensures that while one operation might be “waiting” due 
  to an await, other operations aren't sitting idly. 
  They're still progressing in the background. This behavior allows JavaScript to
  handle multiple asynchronous operations efficiently, even in its single-threaded 
  environment.This makes your asynchronous code appear synchronous. 
*/
console.log("Welcome to Coding Experience!");

let p1 = new Promise((resolve) => {
  setTimeout(() => resolve("result1"), 10000);
});

let p2 = new Promise((resolve) => {
  setTimeout(() => resolve("result2"), 10000);
});

async function demo() {
  console.log("Start");
  let startTime = Date.now();

  let result1 = await p1;
  console.log("P1 resolved in", Date.now() - startTime, "ms");

  let result2 = await p2;
  console.log("P2 resolved in", Date.now() - startTime, "ms");

  console.log("End");
}

demo();
/* output:
  Welcome to Coding Experience!
  Start
  P1 resolved in 10014 ms
  P2 resolved in 10017 ms
  End
  */
