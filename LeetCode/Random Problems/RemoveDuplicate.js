
const removeDuplicates = (nums) => {

    // Create a variable that represents the length of the array
    let arrayLength = 1 

    // Iterate over the 'nums' array using a for statement 
    for (let i = 1; i < nums.length; i++){
        // Create a conditional that compares the current number 'nums[i]' to the previous
        if (nums[i] != nums[i-1]){
            // If they're not equal to each other, then incremenet the length of the array
            nums[arrayLength++] = nums[i]  
        }
    }
    // Create a conditional that returns the length of the nums array if the length is less than or equal to 1
    if (nums.length <= 1){
        return nums.length
    }
    //return the length of the array
    return arrayLength
}
console.log('Example 1: ',removeDuplicates([1,1,2]))
console.log('Example 2: ',removeDuplicates([0,0,1,1,1,2,2,3,3,4]))


