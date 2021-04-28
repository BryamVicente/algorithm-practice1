/*
Given a string s, determine if it is a palindrome, considering only alphanumeric characters 
and ignoring cases.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
 
Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

const isPalindrome = (s) => {

    // Have an original string that's lowercased and replaces all of the characters
    let newOriginalString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()

    // Reverse the string
    let reversedString = newOriginalString.split('').reverse().join('')
   
    // Return boolean value --> ternary or if()
    return newOriginalString === reversedString ? true : false
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("A man:, a bat"))
