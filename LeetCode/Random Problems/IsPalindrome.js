/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false
*/

const isPalindrome = (num) => {

    // Create a variable that represents the reversed number
    let reversed = 0
    // Create a variable that equals to `num` so we can compare later
    let original = num
    
    while (num != 0){
        reversed = reversed * 10 + num % 10
        
        /*The second argument for parseInt() states it's radix. 
        Since we're going by decimal that's why I chose 10
        */
        num = parseInt(num / 10, 10)

        if (reversed < 0){
            return false        
        }
    }
    return reversed === original
}
console.log(isPalindrome(-11))

// console.log("num", num)
// //After reversing, we need to check if the number is still the same
// //return boolean value if the number is or isn't the same 



// console.log("reversed", reversed)
// const isPalindrome = (num) => {
    
//     let newNum = num.toString().split('').reverse().join('')
    
//     return newNum == num 
// }
// let parsedNumber = parseInt(newNum)
// console.log("newNumber", newNum)
// console.log("num",num)

// "101"
// ["1","0","1"]

