/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 
Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is guaranteed to be rotated at some pivot.
-104 <= target <= 104
 
Follow up: Can you achieve this in O(log n) time complexity?
*/

const search = (nums, target) => {

    if (nums === null || nums.length === 0){
        return - 1
    }

    let left = 0
    let right = nums.length - 1

    while (left < right){
        let midpoint = left + (right - left / 2)

        if (nums[midpoint] > nums[right]){
            left = midpoint + 1
        } else {
            right = midpoint
        }
    }

    let startingPoint = left 
    left = 0 
    right = nums.length - 1

    if (target >= nums[startingPoint] && target <= nums[right]){
        left = startingPoint
    }else {
        right = startingPoint
    }

    while (left <= right){
        let midpoint = left + (right -left) /2

        if (nums[midpoint] === target){

        }else if (nums[midpoint] < target){
            left = midpoint + 1
        }else {
            right = midpoint - 1
        }
    }
    return - 1
}

console.log(search([4,5,6,7,0,1,2], 0))