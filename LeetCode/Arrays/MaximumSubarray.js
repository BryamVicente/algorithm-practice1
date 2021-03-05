/*
Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

// This is the solution on Youtube!! --> https://www.youtube.com/watch?v=WdK1Uhsza_I 

const maxSubArray = (nums) => {

    // We have to create a variable that's set equal to the beginning of the array
    let maxSub = nums[0]

    // Iterate over the nums array 
    for (let i = 1; i < nums.length; i++){
        /* the current index should be set equal to the Maximum number which is between the current number and 
        the current number plus the current number being iterated in the left direction */
        nums[i] = Math.max(nums[i], nums[i]+nums[i-1])

        /* maxSub should change it's value to be the max number between the first number in the array and 
        the current max number(nums[i]) */
        maxSub = Math.max(maxSub, nums[i])
    }
    // After exiting the loop I should return maxSub since that's what the question is asking us to do!
    return maxSub
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([-100000]))
console.log(maxSubArray([-2,-1,-3,4,1,-2,1,-5,4]))