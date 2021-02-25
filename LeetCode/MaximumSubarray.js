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

    let maxSub = nums[0]

    for (let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i]+nums[i-1])
        maxSub = Math.max(maxSub, nums[i])
    }
    return maxSub
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([-100000]))