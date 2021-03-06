
const sortArrayByParity = (nums) => {
    // Create an empty array 
    let result = []
    
    // Create for loop to iterate over `nums`
    for (let i = 0; i < nums.length; i++){
        // if nums[i] is even then add to the front of array (.unshift())
        if (nums[i] % 2 === 0){
            result.unshift(nums[i])
        }else {
            // else add to then end of array (.push())
            result.push(nums[i])
        }
    }
    // Return the empty array from step 1
    return result
};
console.log("Example 1: ",sortArrayByParity([3,1,2,4]))
console.log("Example 2: ",sortArrayByParity([3,1,2,4,5,6,8]))




            

/*
Given an array nums of non-negative integers, return an array consisting of all
the even elements of nums, followed by all the odd elements of nums.
You may return any answer array that satisfies this condition.

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
    
Note:

1 <= nums.length <= 5000
0 <= nums[i] <= 5000
*/

