const maximumWealth = (accounts)=> {
    let richestCustomer = 0
    
    for(let i = 0; i < accounts.length; i++){
       let customerWealth = 0
       for( let j = 0; j < accounts[i].length; j++){
        customerWealth += accounts[i][j]
       }
        richestCustomer = Math.max(richestCustomer,customerWealth)
    }
    return richestCustomer
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]))
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))
console.log(maximumWealth([[1,2,3],[3,2,1]]))

