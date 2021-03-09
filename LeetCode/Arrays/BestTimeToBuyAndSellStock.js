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

    let maxNumber = 0
    let startingDay = prices[0]

    for(let i = 1; i < prices.length;i++){

        startingDay = Math.min(prices[i], startingDay)

        maxNumber = Math.max( maxNumber, prices[i] - startingDay)
    }

    return maxNumber
}
console.log(maxProfit([1,4,5,3,6,4]))