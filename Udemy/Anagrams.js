/*
Check to see if two provided strings ate anagrams of each other. 
One string is an anagram of another if it uses the same characters in the same quantity. 
    // For these two always do: 
        Only consider chatacters, not spaces or punctuation. 
        Consider capital letters to be the same as lower case!

       --->  string.replace(/[^\w]/g, "").toLowerCase()

--- Examples:

    anagrams('rail safety', 'fairy tales') --> True 
    anagrams('RAIL! SAFETY','fairy tales') --> True
    anagrams('Hi there','Bye there') --> False
*/

// We can build a hashtable to solve this problem 

// This is a helper function that creates a hash table 
const helper = (string) => {
    let charMap = {}
    
    for (let char of string.replace(/[^\w]/g, '').toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

const anagrams = (first, second) => {

   const firstCharMap = helper(first)
   const secondCharMap = helper(second)

//    console.log("first",firstCharMap)
//    console.log("second",secondCharMap)

    if (Object.keys(firstCharMap).length !== Object.keys(secondCharMap).length){
        return false 
    }
    
    for (let char in firstCharMap){
        if (firstCharMap[char] !== secondCharMap[char]){
            return false 
        }
    }
    return true 
}
console.log(anagrams('rail safety', 'fairy tales'))
