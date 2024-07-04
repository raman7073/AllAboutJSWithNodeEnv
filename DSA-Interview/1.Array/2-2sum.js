const findTwoSum = function (nums, target) {
  const hashMap = new Map();
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numToFind = target - nums[p1];
    //console.log(numToFind, hashMap[numToFind]);
    if (hashMap[numToFind] >= 0) {
      return [hashMap[numToFind], p1];
    } else {
      hashMap[nums[p1]] = p1;
    }
  }
  return null;
};
console.log(findTwoSum([1, 2, 3, 7, 2], 8));
/*
  TC : O(N)
  SC : O(N)
 */
