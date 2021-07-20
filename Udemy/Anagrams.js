
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
    // Call the helper function that I created and use it on both strings 
    const firstString = helperFunction(first)
    const secondString = helperFunction(second)
    // Create a conditional that compares the length of both strings being compared
        // return false if they don't match 
    // Iterate over first string 
        // Create a conditonal that compares the current character of both string1 and string2 
            // return false if they don't match 
    // return true if they match 
}
