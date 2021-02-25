/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array,
and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
*/

/*
Notes: 
- Create a set()
- iterate over array 
- as iteration is happening, the loop is checking each number for duplicate 
*/

// Search the difference between Set() and Arrays


// Source: https://www.youtube.com/watch?v=eNhmrzS_hY0 

// const containsDuplicate = (nums) => {
   
//     let numbers = new Set()

//     for (let num of nums){
//         if (!numbers.has(num)){
//             numbers.add(num)
//         } else {
//             return true
//         }
//     }
//     return false
// }
// const integers1 = [1,2,3,1]
// const integers2 = [1,2,3,4,5]
// const integers3 = [-1, 1, 2, 3, -2]
// const integers4 = ["1", 1, 2,3]

// console.log(containsDuplicate(integers4))


    // This solution is really fast but uses too many built-in methods!
// const containsDuplicate = (numbers) => {
//     return new Set(numbers).size !== numbers.length
// }



const containsDuplicate = (nums) => {

    let mySet = new Set(nums)
    // console.log(mySet)
    if (mySet.size === nums.length){
        return false
    }
    return true
}

console.log(containsDuplicate([1,2,3,1]))