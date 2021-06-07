

const groupAnagrams = (strs) => {

    // Create hash table to keep track of which strings are made with what letters 
    const hashTable = {}
    
    // Create for loop to itereate over "strs"
    for (let i = 0; i < strs.length; i++){
    // While looping through "strs", we need to sort the strings alphabetically 
    
    // Create conditional: If the sorted string doesn't exist in the hash, add it as a key! 
    // push the unsorted string into the key's existing array of values 
    // console.log("sorted string: ", hashTable)
    }
    
    // Since the question is asking to return array of the anagrams, we have to convert from Object to Array
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))


    // let sortedString = strs[i].split("").sort().join("")
    // if (!hashTable[sortedString]){
        //     hashTable[sortedString] = [strs[i]]
        // }else {
            //     hashTable[sortedString].push(strs[i])
            // }
            // return Object.values(hashTable)