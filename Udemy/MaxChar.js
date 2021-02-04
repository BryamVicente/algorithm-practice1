// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Complexity = O(n^2) time and O(n^2) space 
function maxChar(str){
    
    let charMap = {}
    let max = 0
    let maxChar = ''

    for (let char of str) {
        if (charMap[char]){
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    //We use for in loop to iterate over an object 
    
    for (let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

console.log(maxChar("ssstringggghhhhhhhh"))