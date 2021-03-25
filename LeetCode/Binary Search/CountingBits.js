/*
Given an integer num, return an array of the number of 1's in the binary representation of 
every number in the range [0, num].

Example 1:

Input: num = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:

Input: num = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
*/

const countingBits = (num) => {

    let answer = [0]
   
    console.log("This is the num: ",num)
    for(let i=1;i<=num;i++){
        console.log("THis is i: ", i)
        const and = i&1 
                
        console.log("THis is the and: ",and)

        const shift = i>>1 
       
        console.log("THis is the shift: ",shift )
        answer[i] = answer[shift] + and

    }
    return answer
}

console.log(countingBits(6))





