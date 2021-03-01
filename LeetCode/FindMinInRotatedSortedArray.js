/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
 For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the 
array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums, return the minimum element of this array.

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
*/

/* When questions have to do with sorted data, it's best practice to approach problems using Binary
search method */

// https://www.youtube.com/watch?v=ig1m91QK0c8

const findMin = (nums) => {

    let left = 0
    let right = nums.length - 1

    if (nums.length === 1){
        return nums[0]
    }

    if (nums[left] < nums[right]){
        return nums[left]
    }

    while(left <= right){

        const mid = Math.floor((left + right) / 2)

        const leftVal = nums[left]
        const midVal = nums[mid]
        const leftOfMid = nums[mid - 1]
        const rightOfMid = nums[mid + 1]

        if (midVal > rightOfMid){
            return rightOfMid
        } else if (leftOfMid > midVal){
            return midVal
        }

        if (midVal > leftVal){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
}
console.log(findMin([3,4,5,1,2]))