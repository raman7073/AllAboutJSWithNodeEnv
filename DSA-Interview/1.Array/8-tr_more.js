/* 
   Just move the pointer from minimum side 
   it will ensure that we are not missing any container which have water
*/
const trappedRainwater = function (heights) {
  let totalWater = 0;
  let leftMax = 0;
  let rightMax = 0;
  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    if (heights[left] < heights[right]) {
      if (heights[left] >= leftMax) {
        leftMax = heights[left];
      } else {
        totalWater += leftMax - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= rightMax) {
        rightMax = heights[right];
      } else {
        totalWater += rightMax - heights[right];
      }
      right--;
    }
  }
  return totalWater;
};

console.log(trappedRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trappedRainwater([1, 0, 1]));
