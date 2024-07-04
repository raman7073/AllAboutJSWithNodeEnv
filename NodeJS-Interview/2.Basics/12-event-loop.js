/*
 Javascript is a single threaded language.It will execute the code line by line, 
 one after the other.
 When we have asynchronous processes i.e. like timer events or API calls, 
 the execution flow is bit different.
 Node API takes hold of async process and  it is then sent to callback queue/microtask 
 queue (depends on type of async process), further event loop picks it and sent to call
 stack for execution.
*/

console.log("line 1");
setTimeout(() => {
  console.log("line 2");
}, 0);
console.log("line 3");
