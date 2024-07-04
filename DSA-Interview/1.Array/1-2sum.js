/*
 Given an array of integers , return the indices of the two numbers that add up to a given target
 [1,3,7,9,2]
 target =11
 possible answers  = [3,4]
 Step 1: Verify the constraints
    Are all numbers positive or can there be negative?
    Are threre duplicate numbers in the array?
    will there always be a solution?
    what do we return if there is no solution? (null)
    Can there be multiple pairs that add up to the target?
Step 2: write out some test cases
    [1,3,7,9,2] t = 11 ,[3,4]
    [1,3,7,9,2] t = 11 , null
    [] t=1, null
    [5] t=5 ,null
    [1,6] t =7, [0,1]
Step 3: Figure out a solution without code
      any solution
   -> brute force : try every pairs (use for(){for(){}} to generate pairs)
Step 4: Write out solution in code
Step 5: Double Check for errors
Step 6: Test with test cases
Step 7: Analyse space and time complexity 
*/

const findTwoSum = function (nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }
  return null;
};
//console.log(findTwoSum([1, 2, 3, 7, 2], 10));
//console.log(findTwoSum([1, 2, 3, 7, 2], 25));
console.log(findTwoSum([10], 10));
/*
TC:
  number of iterations = n-1 + n-2 + n-3 + .....1 = (n-1)*(n-2)/2
  O(n^2)
SC: O(1)
 */
