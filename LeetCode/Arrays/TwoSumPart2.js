
const twoSum = (numbers, target) => {
    let left = 0, right = numbers.length-1, theSum;

    while (left < right) {
        theSum = numbers[left] + numbers[right];

        if (theSum == target){
            return [left+1,right+1];
        } else if (theSum > target){
            right--;
        } else {
            left++
        }
    }
}
console.log("Example 1: ",twoSum([2,7,11,15], 17))







