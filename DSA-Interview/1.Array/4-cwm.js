/* 
 You are given an array of positive integers where each integer represents the height
 of a vertical line on a chart. Find two lines which together with the x-axis forms a 
 container that would hold the greatest amount of water. 
 Return the area of water it would hold.
 Step 1: Verify the constraints
 Step 2: Test cases
    [1,8,6,2,5,4,8,3,7] => 49
    [1,1] => 1
    [4,3,2,1,4] => 16
    [1,2,1] => 2
    [] => 0
Step 3:  figure out a solution without code
    Brute Force Approach
    Generate all possible pairs of lines and calculate the area of water they would hold.
    Return the maximum area.
Stpe 4: Write the code
Step 5: Double check for errors
Step 6: Test with test cases
Step 7: Analyze the space and time complexity
Step 8: Can we optimize our solution? 
*/
const maximumArea = (height) => {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
};
//console.log(maximumArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
//console.log(maximumArea([1, 1]));
//console.log(maximumArea([4, 3, 2, 1, 4]));
console.log(maximumArea([0]));
/*
 TC: O(n^2)
 SC: O(1)
*/
