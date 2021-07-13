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

const containsDuplicate = (nums) => {

    // Create a hashtable to keep track of how many elements are duplicates 
    let hashTable = {}
    
    // Iterate over nums to check each element 
    for (let num of nums){
        hashTable[num] = hashTable[num] + 1 || 1
        if (hashTable[num] > 1){
            return true 
        }
    }
    
    // Return boolean if a duplicated exists 
    return false
}
console.log(containsDuplicate([1,2,4,4]))


// const containsDuplicate = (nums) => {

//     // Create a hashtable to keep track of how many elements are duplicates 
//     let hashTable = {}
    
//     // Iterate over nums to check each element 
//     for (let num of nums){
//         // console.log("Before if: ", hashTable)
//         if(hashTable[num]){
//             return true
//         }else {
//             hashTable[num] = true
//             console.log("else: ", hashTable) 
//         }
//     }
    
//     return false
     
//     // Return boolean if a duplicated exists 

// }
// console.log(containsDuplicate([1,2,4,4]))








// const containsDuplicate = (nums) => {
   
     // We create a Set because the values should be unique
//     let numbers = new Set()

    // for of loops can be used in this case

//     for (let num of nums){

    // For this conditional we're checking to see if the Set has the current number that's being iterated
    // If it doesn't, then that number should be added in the Set, or else I should return true since that number is a duplicate
    // Otherwise return false 

//         if (!numbers.has(num)){
//             numbers.add(num)
//         } else {
//             return true
//         }
//     }
//     return false
// }

// -------------------------------------------------------------------------------//

// This solution is really fast but uses too many built-in methods!
// const containsDuplicate = (numbers) => {

    // This is a much more efficient way of writing it because it only needs one line
    // Having 'return' gives you a boolean value and that's what the questions wants
    // I can create a Set while also checking its size 
    // If the size of the Set is not equal to the length of the array, then it should return either true or false

//     return new Set(numbers).size !== numbers.length
// }

// -------------------------------------------------------------------------------//

// const containsDuplicate = (nums) => {

//     // We create a Set because the values should be unique
//     let newSet = new Set(nums)
//     console.log(newSet.size)
//     console.log(nums.length)

//     // For this conditional we're trying to check if the size of the Set is equal to the length of the array
//     // If the array is larger that means that there're dublicates 
//     // If they're equal to each other then it should return false or else it should return true
//     if (newSet.size === nums.length){
//         return false
//     }
//     return true
// }

// console.log(containsDuplicate([1,2,3,1,2,4,4]))


