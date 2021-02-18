/*
Given an array nums of n integers where n > 1, return an array output such that 
output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or 
suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count 
as extra space for the purpose of space complexity analysis.)
*/

// Complexity  = O(n) time and O(n) space 

const productExceptSelf = (taco) => {

    let output = []
    let right = 1
    let left = 1

    for (let i = 0; i < taco.length; i++){
        output[i] = left
        left = left * taco[i]
    }
    
    for (let i = taco.length - 1; i >= 0; i --){
        output[i] = right* output[i]
        right = right * taco[i]
    }

    return output
}
console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([5,6,7,8]))
console.log(productExceptSelf([9,10,7,8]))