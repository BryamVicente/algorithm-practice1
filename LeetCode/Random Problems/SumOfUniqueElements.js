
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
        // Create conditional --> if the key value is less than 2 increment sum value 
    //

    //return the sum 

};
console.log(sumOfUnique([1,2,3,2]))




/*
  

    
    for(let key in obj){
        if(obj[key] < 2){
            sum += parseInt(key)
        }
    }
    return sum

*/