/*
                     Shifing pointer technique
 This function calculates the maximum area of water that can be trapped between vertical
 lines in the given array.
 It uses the two-pointer approach to find the maximum area.
 @param {number[]} height - The array representing the heights of the vertical lines.
 @returns {number} - The maximum area of water that can be trapped.
 In this code, we are using the Two-Pointer technique to find the maximum area of a
 container formed by vertical lines. The goal is to find two lines that, 
 together with the x-axis, form a container with the maximum area.
 The Two-Pointer technique involves using two pointers, left and right, 
 initially pointing to the first and last elements of the height array, respectively. 
 These pointers represent the two vertical lines of the container.
 We start with the widest possible container (because we want to maximize area),
 which is when the two pointers area at the 
 outermost positions,making sure that there should no widest container which can give
 larger area.
 Then, we calculate the area of the container by multiplying the 
 minimum height of the two lines with the distance between them 
 (the difference between the indices of the two pointers).
 We keep track of the maximum area found so far in the maxArea variable. 
 Then, we move the pointer that corresponds to the shorter line inward, 
 as moving the pointer with the longer line will not increase the area. 
 This is because the area is determined by the shorter line and the width of the container.
 We continue this process until the two pointers meet or cross each other. 
 At each step, we update the maxArea if we find a larger area.
 Finally, we return the maximum area found.
 The advantage of using the Two-Pointer technique in this scenario is that it allows us
 to find the maximum area in a single pass through the array, 
 with a time complexity of O(n), where n is the number of elements in the height array. 
 This is more efficient than a brute-force approach that would require checking all 
 possible combinations of lines.In this code, we are using the Two-Pointer technique 
 to find the maximum area of a container formed by vertical lines. 
 The goal is to find two lines that, together with the x-axis, form a container with the 
 maximum area.

 The Two-Pointer technique involves using two pointers, left and right, initially 
 pointing to the first and last elements of the height array, respectively. 
 These pointers represent the two vertical lines of the container.
 We start with the widest possible container, which is when the two pointers are at 
 the outermost positions. Then, we calculate the area of the container by
 multiplying the minimum height of the two lines with the distance between them
   (the difference between the indices of the two pointers).
 We keep track of the maximum area found so far in the maxArea variable. 
 Then, we move the pointer that corresponds to the shorter line inward, 
 as moving the pointer with the longer line will not increase the area. 
 This is because the area is determined by the shorter line and the width of the container.
 We continue this process until the two pointers meet or cross each other. At each step, 
 we update the maxArea if we find a larger area.
 Finally, we return the maximum area found.

 */
function maximumArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(maximumArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maximumArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
