/*
Write a function that reverses a string. The input string is given as an array of characters s.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 
Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.

*/

const reverseString = (s) => {

    let newString = ''
   

    for (let letter of s ){
       newString = letter + newString
    }

    return newString.split('')

    
  

}
console.log(reverseString(["h","e","l","l","o"]))