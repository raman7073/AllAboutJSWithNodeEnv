/*
Given a string s, find the length of the longest substring (contiguous characters)
without repeating characters.
 */
const longestSubstring = (s) => {
  //coding brute force approach
  if (s.length <= 1) return s.length;
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    let seenChars = {};
    let currentLength = 0;
    for (let j = i; j < s.length; j++) {
      const currentChar = s[j];
      if (!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      } else {
        break;
      }
    }
  }
  return longest;
};
console.log(longestSubstring("abcdabcbb"));
