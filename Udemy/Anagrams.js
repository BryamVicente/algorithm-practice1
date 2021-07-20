
// First I will create a helper function that takes in a string as an argument
const helperFunction = (string) => {
    // I'll create a hashtable to keep track of the characters in a string 
    let hashString = {}
    // Itereate over the string
    for(let character of string.replace(/[^/w]/g,"").toLowerCase()){
        hashString[character] = hashString[character] + 1 || 1
    }
    // return that specific string 
    return hashString
}
// Create the main function where I pass in string1 and string2
const anagrams = (string1,string2) => {
    const firstString = helperFunction(string1)
    const secondString = helperFunction(string2)
    // Create a conditional that compares the length of both strings being compared
    if (Object.keys(firstString).length !== Object.keys(secondString).length){
        // return false if they don't match 
        return false 
    }
    // Iterate over first string 
    for(let character in firstString){
        // Create a conditonal that compares the current character of both strings 
        if(firstString[character] !== secondString[character]){
            // return false if they don't match 
            return false
        }
    }
    return true
}
console.log("Example 1:",anagrams('rail safety', 'fairy tales'))
console.log("Example 2:",anagrams('RAIL! SAFETY','fairy tales'))
console.log("Example 3:",anagrams('bobby','lobby'))

