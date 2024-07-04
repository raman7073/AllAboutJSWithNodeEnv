/*
  Given an array of integers representing an elevation map where 
  the width of each bar is 1, return how much rainwater can be trapped.
  Step 1: Verify the constraints  
    n>=0 
  Step 2: Test cases
    [0,1,0,2,1,0,1,3,2,1,2,1] => 6
    [4,2,0,3,2,5] => 9
    [] => 0
    [1,2,3,4,5] => 0
  Step 3: Thinking without code
  Step 4: Write the code
  Step 5: Double check for errors
  Step 6: Test the code with the test cases
  Step 7: Time and Space Complexity
*/
const trappedRainwater = function (heights) {
  let totalWater = 0;
  for (let i = 0; i < heights.length; i++) {
    let leftMax = 0;
    let rightMax = 0;
    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, heights[j]);
    }
    for (let j = i; j < heights.length; j++) {
      rightMax = Math.max(rightMax, heights[j]);
    }
    const water = Math.min(leftMax, rightMax) - heights[i];
    if (water > 0) {
      totalWater += water;
    }
  }
  return totalWater;
};
//console.log(trappedRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trappedRainwater([1, 0, 1]));
// Time Complexity: O(n^2) and Space Complexity: O(1)
