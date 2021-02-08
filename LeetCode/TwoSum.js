/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/


/*
//BRUTE FORCE ---> O(n^2) time

function twoSum(nums, target){
    let result = []

    for (let i = 0; i < nums.length - 1; i++){
        for (let j = i + 1; j < nums.length - 1; j++){
            if (nums[i] + nums[j] === target ){
                result.push(i)
                result.push(j)
            }
        }
    }
    return result
}

const input = [2, 7, 11, 15]
console.log(twoSum(input, 9))
*/

// More improved solution!!! With complexity of O(n) time and increased space since hashes need to be created 

function twoSum(num, target){
    let numObject = {}

    for (let i = 0; i < num.length; i ++){
        let thisNum = num[i]
        numObject[thisNum] = i
    }

    for (let i = 0; i < num.length; i++){
        let difference = target - num[i]
        if (numObject.hasOwnProperty(difference) && numObject[difference] !== i){
            return [i, numObject[difference]]
        }
    }
}
const input = [2, 7, 11, 15]
console.log(twoSum(input, 9))