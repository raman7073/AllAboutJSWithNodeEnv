/*
  Given a string, determine if it is almost a palindrome.
  A string is almost a palindrome if it becomes a 
  palindrome by removing 1 letter.
  Considering only alphanumeric characters and ignore case sensitivity.

  Brute force would be find first non matching characters , 
  then generate two strings by removing one of then at once.
  Then check any of them is palindrome.
*/

const validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return (
        validSubPalindrome(s, start + 1, end) ||
        validSubPalindrome(s, start, end - 1)
      );
    }
    start++;
    end--;
  }
  return true;
};

const validSubPalindrome = function (s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
console.log(validPalindrome("asdfxdsa"));
