/*
Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

// This is the solution on Youtube!! --> https://www.youtube.com/watch?v=WdK1Uhsza_I 

// create a variable that will be the largeSum 
// largeSum should be equal to the beginning of the array
// iterate over the nums array starting at 0
    // we have to change nums[i] and use Math.max()
    // change the value of largeSum -> it has to include Math.max()
// return the largeSum
const maxSubArray = (nums) => {

    let largeSum = nums[0]
 

    for (let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
        
        largeSum = Math.max(largeSum, nums[i])
    }
    return largeSum
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([5,4,-1,7,8]))