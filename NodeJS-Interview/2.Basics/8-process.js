/* 
process is a global object, can be accessed anywhere in the code.
It contains the information of the ongoing node process and
also gives control over it.

It gives some lifecycle methods as well.

Information like:
 node version, v8 version,architecture,platform,argv.
Methods like:
 process.on() -> execute some process on various stages of the execution.
 process.kill() -> kill/terminate the process.
 process.uptime() -> gives the time in seconds for which the process is running.
 process.memoryUsage() -> gives the memory usage of the process.

 There are various properties offered by process object.One such is
 process.argv which allows to deal with the command line arguments.
 In "npm install -g nodemon" ,npm is executable command, and others are arguments.

 process.argv is an array that contains the command line arguments.
 By default, the first element of the array is the path of the node executable.
 The second element is the path of the file being executed.
 If we pass any arguments from command line, they will be starting from the third element of the array.

 process.on() can handle various events and life cycle of a node process.
 Syntax:
 process.on("event", callbackFunction);
 Example events:
 beforeExit -> when the process is about to exit.
 exit -> when the process exits.
 uncaughtException -> when an exception is not caught.
 unhandledRejection -> when a promise is rejected and no catch is used.
 warning -> when a warning is issued.
 message -> when a message is sent to the process.
 disconnect -> when the parent process disconnects.
 

 */

//console.log(process);
//console.log(process.argv);
//Dislaying message before the process exits.
process.on("beforeExit", () => {
  console.log("beforeExit event fired");
});
process.on("exit", () => {
  console.log("exit event fired");
});

console.log("process started");
