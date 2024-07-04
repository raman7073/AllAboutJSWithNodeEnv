const trappedRainwater = function (heights) {
  let totalWater = 0;
  let leftMax = [];
  let rightMax = [];
  leftMax[0] = heights[0];
  for (let i = 1; i < heights.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], heights[i]);
  }
  rightMax[heights.length - 1] = heights[heights.length - 1];
  for (let i = heights.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], heights[i]);
  }
  for (let i = 1; i < heights.length - 1; i++) {
    const water = Math.min(leftMax[i], rightMax[i]) - heights[i];
    if (water > 0) {
      totalWater += water;
    }
  }
  return totalWater;
};

console.log(trappedRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trappedRainwater([1, 0, 1]));
// Time Complexity: O(n) and Space Complexity: O(n)
