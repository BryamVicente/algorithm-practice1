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

    // We have to set the max profit to 0 since that's what we're starting with
    let maxProfit = 0
    // we're starting from the beginning of the array since we automatically have to buy first before selling
    let buyPrice = prices[0]

    // Here we have to create a for loop that iterates over the prices array 
    for(let i = 1; i < prices.length; i++){
        
        /*We have to change the value of buyPrice because it has to be the smallest number between 
        the currentPrice and the first number of the array */
        buyPrice = Math.min(prices[i], buyPrice)
        /*MaxProfit needs to be equal to the largest number between the current price minus the buyPrice 
        and maxProfit which is currently zero */
        maxProfit = Math.max(prices[i] - buyPrice, maxProfit)
    }
    // Once the loop is done, we need to return the max Profit which be an integer 
    return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4]))