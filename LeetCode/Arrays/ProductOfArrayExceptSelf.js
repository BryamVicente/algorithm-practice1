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


// create a new array 

// create for loop that iterates from left to right 
// create for loop that iterates from right to left

//return the new array
const productExceptSelf = (nums) => {

    let answer = []
    let left = 1
    let right = 1 

    for(let i = 0; i < nums.length; i++){             
        answer[i] = left 
        left = nums[i] * left 
        // console.log(answer)
    }              
   
    for(let j = nums.length - 1; j >= 0; j--){             
        answer[j] = right * answer[j]
        right = nums[j] * right 
        console.log(answer)
    }  
    // console.log(left)
    // console.log(right)

//    return answer
}
console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))
console.log(productExceptSelf([5,4,3]))
