
const removeElement = (nums, val) => {

    //Create a for loop to iterate over nums 
    for (let i = 0; i < nums.length; i++) {
        // Create an if statement that can compare the current number and val
        if(nums[i] === val){
        // if they match I should replace/swap them and decrement 
            nums.splice(i, 1);
            i--;
        }
       
        
    }

    // return the nums length 
}
console.log("Example 1: ", removeElement([3,2,2,3], 3))

