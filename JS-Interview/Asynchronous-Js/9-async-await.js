console.log("Welcome to Coding Experience!");
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 10000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 5000);
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
    P1 resolved in 10002 ms
    P2 resolved in 10003 ms
    End 
*/
