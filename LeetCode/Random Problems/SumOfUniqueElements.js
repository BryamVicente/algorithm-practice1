/*
You are given an integer array nums. The unique elements of an array are the elements 
that appear exactly once in the array.

Return the sum of all the unique elements of nums.

Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
Example 2:

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.

*/

const sumOfUnique = (nums) => {
    let obj = {}
    let sum = 0
    
    for(let num of nums){
        if(obj[num] > 0){
            obj[num]++
        } else {
            obj[num] = 1
        }
    }
    console.log(obj)
    
    for(let key in obj){
        if(obj[key] < 2){
            sum += parseInt(key)
        }
    }
    // console.log(sum)
    return sum
};
console.log(sumOfUnique([1,2,3,2]))
// console.log(sumOfUnique([1,2,3,4,5]))
// console.log(sumOfUnique([1,1,1,1,1]))

// let newSet = [...new Set(nums)]
// // let newSet = new Set(nums)
// let sum = 0
// console.log(newSet)

// for (let i = 1; i < nums.length; i++){

//     if (newSet[i] === nums[i]){
//         // newSet.add(num)
//         // newSet.splice(nums[i])
//         sum += nums[i]
//     }
    
// }
// return sum




// for (let i = 0; i < nums.length; i++){

//     if (!newSet.has(nums[i])){
//         sum += nums[i]
//     }
// }