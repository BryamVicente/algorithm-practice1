/*
Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target.You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// This solution is even faster!!
// DO moer research on this answer!!

// const twoSum = (nums, target) => {
//     const numObject = {};
    
//     for (let i = 0; i < nums.length; i++){

//         if (numObject[nums[i]] >= 0){
//             return [numObject[nums[i]], i]
//         }
//         numObject[target-nums[i]] = i
//     }
// };

const twoSum = (nums, target) => {
    const numObject = {};
    
    for (let i = 0; i < nums.length; i++){
        console.log('before', numObject)
        if(numObject[target - nums[i]] >= 0 ){
            console.log('during', numObject)
            return [numObject[target -nums[i]], i]
        }
        console.log('after if', numObject)
        numObject[nums[i]] = i
    }
    console.log('ending', numObject)
};

const input = [0, 2, 11, 7,8, 15]
console.log(twoSum(input, 17))







