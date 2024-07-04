/* 
                    Sliding Window Technique
   Form a window over some portion of the sequential data, then move
   that window through the data to capture different parts of it.                  

*/
const string = "au";

const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  const seen = {};
  let left = 0,
    longest = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previouslySeenChar = seen[currentChar];

    // check if the current character was seen in the previous window
    if (previouslySeenChar >= left) {
      left = previouslySeenChar + 1;
    }

    seen[currentChar] = right;

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};

console.log(lengthOfLongestSubstring(string));
