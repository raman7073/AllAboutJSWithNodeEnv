// asnyc/await is a new way to write asynchronous code in JavaScript and
// makes it easier to handle promises.
// async function always return a promise
async function asyncFunction() {
  //it will return a promise with the value "Async Function".
  //It will wrap the value in a resolved promise.
  return "Async Function";
}
//need to use then to get the value from the promise
console.log(asyncFunction());
//await can only be used inside an async function
const p = new Promise((resolve, reject) => {
  resolve("Promise resolved");
});
async function handlePromise() {
  /*
    //without await, it will not wait for the promise to resolve
    // and does not block the code execution.
    p.then((result) => {
        console.log(result);
    });
   */
  //await will wait for the promise to resolve and then return the value,
  //till then it will block the code execution.

  const result = await p;
  console.log(result);
}
handlePromise();
