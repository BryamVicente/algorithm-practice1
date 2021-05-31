
const removeDuplicates = (nums) => {

}

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
