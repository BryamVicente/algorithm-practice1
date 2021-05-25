
const runningSum = (nums) => {

    for (let i = 1; i < nums.length; i++){
        nums[i] = nums[i] + nums[i -1]
    }
    return nums
}
console.log('Example 1: ',runningSum([1,2,3,4]))
console.log('Example 2: ',runningSum([1,1,1,1,1]))
console.log('Example 3: ',runningSum([3,1,2,10,1]))



// for (let i = 1; i < nums.length; i++){
//     nums[i] = nums[i] + nums[i -1]
// }
// return nums