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
- iterate over array 
- as iteration is happening, the loop is checking each number for duplicate 

*/

const containsDuplicate = (nums) => {
   
    let numbers = new Set()

    for (let num of nums){
        if (!numbers.has(num)){
            numbers.add(num)
        } else {
            return true
        }
    }
    return false
}
const integers1 = [1,2,3,1]
const integers2 = [1,2,3,4,5]

console.log(containsDuplicate(integers2))



    // This solution is really fast but uses too many built methods!
// const containsDuplicate = (numbers) => {
//     return new Set(numbers).size !== numbers.length
// }