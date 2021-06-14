
const sumOfUnique = (nums) => {
    // Create hash table to keep count of unique elements
    let uniqueHash = {}
    // The expected output is an integer which means we need a variable that represents the sum
    let uniqueSum = 0 

    //Create a for of loop 
    for(let num of nums){
        // Create conditional -> if the current number exist inside the hash table, then incremnt by 1
        if(uniqueHash[num] > 0){
            uniqueHash[num]++
        }else {
            // else make that current number equal to 1 
            uniqueHash[num] = 1
        }
    }

    // Create a for in loop for hash table
    for(let key in uniqueHash){
        // Create conditional --> if the key value is less than 2 increment sum value 
        if(uniqueHash[key] < 2){
            uniqueSum += parseInt(key)
        }
    }
    //return the sum 
    return uniqueSum
};
console.log("Example 1: ",sumOfUnique([1,2,3,2]))
console.log("Example 2: ",sumOfUnique([1,2,3,4,5]))


