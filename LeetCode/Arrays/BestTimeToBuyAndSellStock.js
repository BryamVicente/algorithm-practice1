/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a 
different day in the future to sell that stock. Return the maximum profit you can achieve 
from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

// Source: https://www.youtube.com/watch?v=Nd9NmgJtfo4 

const maxProfit = (prices) => {
    // Create a variable that represents the max number 
    let maxNumber = 0
    // prices[0] is the beginning of the array. which means that I can't sell on this day 
    let firstDay = prices[0]

    //for loop that iterates over prices. I'm starting the 1th place since it represents the first day!  
    for(let i = 1; i < prices.length; i++){

        // Compare prices[i] and prices[0] to see which is the smaller number 
        firstDay = Math.min(firstDay,prices[i])
        // Compare the max number and prices[i] - the beginning of array and see which number is higher  
        maxNumber = Math.max(maxNumber, prices[i]-firstDay)
        console.log("Just testing: ",maxNumber)
    }
    // Return the max number/profit 
}
console.log("Example 1: ", maxProfit([7,1,5,3,6,4]))


// const maxProfit = (prices) => {

//     let maxNumber = 0
//     let startingDay = prices[0]

//     for(let i = 1; i < prices.length;i++){

//         startingDay = Math.min(prices[i], startingDay)

//         maxNumber = Math.max( maxNumber, prices[i] - startingDay)
//     }

//     return maxNumber
// }
// console.log(maxProfit([1,4,5,3,6,4]))