/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false
*/


const checkIfPangram = (sentence) => {
    
    let pangramTable = {}

    for (let character of sentence) {
        pangramTable[character] += 1
    }
    
    let counter = 0 

    for (let key in pangramTable) {  
        counter++
    }

    if (counter === 26) {
        return true
    }

    return false
}
console.log("Example 1: ",checkIfPangram("leetcode"))
// console.log("Example 2: ", checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
// console.log("Example 3: ",checkIfPangram("LeetCode"))












