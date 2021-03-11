
const maximumWealth = (accounts)=> {
    let bigSum = 0
    
    for(let i = 0; i < accounts.length; i++){
       let currentSum = 0
       for( let j = 0; j < accounts[i].length; j++){
        currentSum += accounts[i][j]
       }
        bigSum = Math.max(bigSum,currentSum)
    }

    return bigSum
};


 console.log(maximumWealth([[1,5],[7,3],[3,5]]))
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))
console.log(maximumWealth([[1,2,3],[3,2,1]]))