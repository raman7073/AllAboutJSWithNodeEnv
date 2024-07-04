/* 
 Automatic Semicolon Insertion (ASI)
 When you write a code in JavaScript and forget to put a semicolon at the end of a 
 statement,JavaScript will automatically insert a semicolon at the end of the statement.
 This is called automatic semicolon insertion.
 Because of this feature, you won't get any error if you forget to put a semicolon.
 It doesn't blindly insert a semicolon at the end of each line.But sometimes it can put 
 a semicolon in the wrong place.
 
 Relative Question:
 1. Should you terminate statements with semicolons in JavaScript?
    Yes, you should terminate statements with semicolons in JavaScript.
    It is a good practice to terminate statements with semicolons in JavaScript.
    It is not mandatory but it is a good practice.
2. Can "use strict" mode change the behavior of ASI?
   No, "use strict" mode does not change the behavior of ASI.
   When we use "use strict" mode, It does not
   mean we have to terminate statements with semicolons.
   
*/

function test() {
  return;
  {
    message: "Hello";
  }
}
console.log(test()); //gives undefined
function test1() {
  return {
    message: "Hello",
  };
}
console.log(test1()); //gives {message: "Hello"}
