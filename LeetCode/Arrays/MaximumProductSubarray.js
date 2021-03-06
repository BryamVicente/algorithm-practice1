/*
Given an integer array nums, find the contiguous subarray within an array 
(containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/
//

function maxProduct(nums) {

    let maxTillIndex = [nums[0]]
    let minTillIndex = [nums[0]]
    let product = nums[0]

    for(let i = 1; i < nums.length; i++){

        let num = nums[i]

        maxTillIndex[i] = Math.max(
        num, 
        num * maxTillIndex[i -1], 
        num * minTillIndex[i -1]
        )

        minTillIndex[i] = Math.min(
            num, 
            num * maxTillIndex[i -1], 
            num * minTillIndex[i -1]
        )
        product = Math.max(product, maxTillIndex[i] )
    }
    return product
}

console.log(maxProduct([2,3,-2,-4]))