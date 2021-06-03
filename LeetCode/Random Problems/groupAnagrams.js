/* 
Given an array of strings strs, group the anagrams together. You can return the answer 
in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word 
or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 
Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.
*/

const groupAnagrams = (strs) => {

    // Create hash table to keep track of which strings are made with what letters 
    const hashTable = {}

    // Create for loop to keep itereate over "strs"
    for (let i = 0; i < strs.length; i++){
        // While looping through "strs", we need to sort the strings alphabetically 
        let sortedString = strs[i].split("").sort().join("")
        
        // Create conditional: If the sorted string doesn't exist in the hash, add it as a key! 
        if (!hashTable[sortedString]){
            hashTable[sortedString] = [strs[i]]
        }else {
            // push the unsorted string into the key's existing array of values 
            hashTable[sortedString].push(strs[i])
        }
        console.log("sorted string: ", hashTable)
    }

    // Since the question is asking to return array of the anagrams, we have to convert from Object to array 
    return 
    
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))