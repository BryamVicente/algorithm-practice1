

const sumOfUnique = (nums) => {
    let obj = {}
    let sum = 0
    
    for(let num of nums){
        if(obj[num] > 0){
            obj[num]++
        } else {
            obj[num] = 1
        }
    }
    console.log(obj)
    
    for(let key in obj){
        if(obj[key] < 2){
            sum += parseInt(key)
        }
    }
    // console.log(sum)
    return sum
};
console.log(sumOfUnique([1,2,3,2]))
// console.log(sumOfUnique([1,2,3,4,5]))
// console.log(sumOfUnique([1,1,1,1,1]))

// let newSet = [...new Set(nums)]
// // let newSet = new Set(nums)
// let sum = 0
// console.log(newSet)

// for (let i = 1; i < nums.length; i++){

//     if (newSet[i] === nums[i]){
//         // newSet.add(num)
//         // newSet.splice(nums[i])
//         sum += nums[i]
//     }
    
// }
// return sum




// for (let i = 0; i < nums.length; i++){

//     if (!newSet.has(nums[i])){
//         sum += nums[i]
//     }
// }