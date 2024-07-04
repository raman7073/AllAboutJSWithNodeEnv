/*
 Node programming is all about using modules,
 be it your own - custom modules, built-in modules or a third-party modules.

 A function or set of related functions defined in an
 individual file is called a module.

*/

//const calc = require("./calc");
const { add, subtract, multiply } = require("./2.2-calc");
//const c = calc.subtract(1, 2);
const c = subtract(1, 2);
console.log(c);
