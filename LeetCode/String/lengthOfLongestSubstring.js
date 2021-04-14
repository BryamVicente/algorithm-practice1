/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
*/

var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let current = "";
    
    for (let i = 0; i < s.length; i++) {
        current = current.substring(current.indexOf(s[i]) + 1)        
        current += s[i];
        
        if (current.length > longest) {
            longest = current.length;
        }
    }
    return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring(''))




























// const lengthOfLongestSubstring = (characters) => {

//     // create an empty string
//     let newString = ''
//     // create a variable that represents the length of the substring
//     let substringLength = 0
    
//     let currentCharacter = ''

//     for (let char of characters){
//         if (currentCharacter !== char){
//             newString += char
//         }
//         console.log("newString: ", characters[char])
//        return newString.includes(char) ? newString.length : "stop"
//     }

//     // console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

//     // iterate over the string 
//         //find and hold non-repeating characters
//         // place non repeated characters inside the empty string
            

//     // return substring length(this is a number)
// };