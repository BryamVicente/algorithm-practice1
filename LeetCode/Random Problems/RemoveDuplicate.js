
const removeDuplicates = (nums) => {

    // Create a variable that represents the length of the array

    // Iterate over the 'nums' array using a for statement 
        // Create a conditional that compares the current number 'nums[i]' to the previous
        // If they're not equal to each other, then incremenet the length of the array
    //

    // Create a conditional that returns the length of the nums array if the length is less than or equal to 1

    //return the length of the array
}
console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

// const removeDuplicates = (nums) => {

//     // BIG QUESTION: CAN I USE SETS FOR THIS PROBLEM??

//     // Create a conditional that returns the length of nums if the length is less that 1 
//     if (nums.length <= 1){
//         return nums.length
//     }
    
//     // Create a variable represents the length of the array; start at 1
//     let arrayLength = 1

//     // Iterate over the sorted nums 
//     for (let i = 1; i < nums.length; i++){
//         // Conditionat states --> if the current element being iterated is not equal to the previous
//         if (nums[i] != nums[i-1]){

//             // increment Arraylength 
//             nums[arrayLength++] = nums[i]  
//         }
//     }
//     //return the length of the "new array" which is an integer 
//     return arrayLength
// };
// console.log(removeDuplicates([1,1,2]))
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
