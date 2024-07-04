/* 
   Function Scope vs Block Scope 
   What is scope of a variable?
   Scope of a variable is the lifetime or
   availability of a variable within a program.
   ES5 has function scope & that is because of hoisting and
   ES6 does not have hoisting and it has block scope.
   If you declare a variable using var, then hoisting will be there.
   Block scope is introduced in ES6 using let and const.

   When hoisting is there, you have function scope i.e. one variable for each function.
   You cannot have another variable with the same name in ES5 or with var.
   Relative Question:
   1. What is hoisting in JavaScript?
     Hoisting
   2. What is scope of a variable?
     Scope of a variable is the lifetime or availability of a variable within a program.
   3. What is block and block scope ?
   4. What is the function scope and how it is different from block scope?
   */
console.log(x);
var x = 10;
function test() {
  var x = 20;
  console.log(x);
  if (true) {
    var x = 30;
  }
  console.log(x);
}
test();
console.log(x);
