

const groupAnagrams = (strs) => {
    // Create hash table to keep track of which strings are made with what letters 
    const hashTable = {}
    
    // Create for loop to itereate over "strs"
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
    }
    // Since the question is asking to return array of the anagrams, we have to convert from Object to Array
    return Object.values(hashTable)
}
console.log("Example 1: ",groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log("Example 2: ",groupAnagrams([""]))
console.log("Example 3: ",groupAnagrams(["a"]))

