/*   
      Difference between null and undefined
      
   In all programming languages, we see null values.
   JavaScript has both null and undefined values.
   1. undefined
   Most of the languages have data types for variables.
   Javascript also has but at the time of variable declaration,
   there is no type decided.
   Then after the value is assigned, the type is decided.
    => let x; // undefined   
    => let x = 10; // number
 
    Before any value is assigned to a variable in Javascript, the variable contains undefined.

    Also typeof variable is undefined.
    So, undefined acts as a placeholder for a variable that has not been assigned a value.

    2. null
    null is exactly the same as other programming languages.
    null means nothing.
    When you have a variable or object which you want to make empty, you can assign null to it.

    (null === undefined) // false(In case of strict equality operator,it checks both type and value.)
    (null == undefined) // true (In case of loose equality operator, it checks only value.Here both are empty.)

    Relative Question:
    1. What is undefined in JavaScript?
      A variable that has not been assigned a value is undefined.
    2. What will be the output of output of undefined == null and undefined === null? Why?
      undefined == null is true because in loose equality operator,
      it checks only value.Both represent nothing-ness.
      undefined === null is false because in strict equality operator, 
      it checks both type and value.undefined is itself a type and 
      null is primitive data type.if you print typeof null,
      it will return object, which is a bug in JavaScript.
      Primitive data types are inbuilt data types or a set of basic data types 
      from which all other data types are constructed.

    3. Can you explicitly assign undefined to a variable?
      Yes, you can assign undefined to a variable.
      let x = undefined;
      console.log(x); // undefined


 */

let x = null;
console.log(typeof x);
let y;
console.log(typeof y);
