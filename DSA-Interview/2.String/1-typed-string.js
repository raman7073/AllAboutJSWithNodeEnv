/*
  Given two strings S and T , return 
  if they are equal when both are typed out.
  Any '#' that appears in the string 
  counts as a backspace. 
  Step 1: Verify Constraints
   "ab##" -> ""
   "a###b"-> "b"
   are two empty string equal?
   does case sensitivity matter?
  Step 2: Some test cases

  Step 3: thinking solution without code
     stack
*/
const buildString = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#" && stack.length > 0) stack.pop();
    else stack.push(s[i]);
  }
  return stack.join("");
};
const isEqual = function (s, t) {
  const firstString = buildString(s);
  const secondString = buildString(t);
  console.log(firstString, secondString);
  if (firstString === secondString) return true;
  else return false;
};
console.log(isEqual("eee#", "b#b#ee"));
/*
  TC : O(a+b) SC = O(a+b)
*/
