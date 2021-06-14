
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
    
    for(let key in obj){
        if(obj[key] < 2){
            sum += parseInt(key)
        }
    }
    return sum
};
console.log(sumOfUnique([1,2,3,2]))
