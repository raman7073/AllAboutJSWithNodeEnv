/* 
  Here sorting will break the order , this solution is correct when we need to return 
  number not indices
 */
const findTwoSum = function (nums, target) {
  nums.sort();
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] === target) {
      return [left, right];
    } else if (nums[left] + nums[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
};
console.log(findTwoSum([1, 2, 3, 7, 2], 8));
/*
    TC : O(N)
    SC : O(N)
   */
