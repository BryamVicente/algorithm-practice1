/*
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, 
you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: Cheapest is: start on cost[1], pay that cost, and go to the top.

Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: Cheapest is: start on cost[0], and only step on 1s, skipping cost[3].

*/

// const minCostClimbingStairs = (cost) => {
    
//     // Create a variable that reps the min cost
//     let minCost = 0 

//     // iterate over cost array 
//     for (let i = 0; i < cost.length; i++){
//         // Create a variable that gives the min value between cost[0] and cost[1]
//         // let minValue = Math.min(cost[0],cost[1])
//         console.log("Before",minCost)
//         console.log("cost",cost[i+1] + cost[i+2] )
//         minCost = Math.min(cost[0+ 1 ], cost[i])
//         console.log("Middle",minCost)

//     }
//     console.log("after",minCost)

//    // return min cost 
// };
// // console.log(minCostClimbingStairs([10,15,20]))
// console.log(minCostClimbingStairs([1,100,3,4,1,100,1,1,100,1]))




/*

var minCostClimbingStairs = function(cost) {
    /*
    Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Min Cost Climbing Stairs.
    Memory Usage: 34.9 MB, less than 60.61% of JavaScript online submissions for Min Cost Climbing Stairs.
    
    O(n) time, O(1) space
	
	- Bottom up strategy
	- Iterative
	- Memoization
	
	Trick: At index [i], you only need to know the min cost when stepping on [i - 1] and [i - 2]. This is a slight variation on fibonacci.
    
    
    if (cost.length === 1) return 0;
    if (cost.length === 2) return Math.min(cost[0], cost[1]);
    
    let minCostTwoBefore = cost[0];
    let minCostOneBefore = cost[1];
    
    for (let n = 2; n < cost.length; n++) {
        const minCostAtCurrent = cost[n] + Math.min(minCostOneBefore, minCostTwoBefore);
        
        minCostTwoBefore = minCostOneBefore;
        minCostOneBefore = minCostAtCurrent;
    }
        
    return Math.min(minCostOneBefore, minCostTwoBefore);
};
*/