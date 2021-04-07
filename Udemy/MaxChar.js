// --- Directions
// Given a string, return the character that is most
// commonly used in the string.

// --- Examples:
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str){
    
    let charHash = {}
    let max = 0
    let maxChar = ''
    
    for (let character of str) {
        if (charHash[character]){
            charHash[character]++
        } else {
            charHash[character] = 1
        }
    }

    for (let character in charHash){
        if(charHash[character] > max){
            max = charHash[character]
            maxChar = character
    
        }
    }
    return maxChar 
}
console.log(maxChar("sttring"))




// //We use for in loop to iterate over an object 




// console.log(maxChar("ssstringggghhhhhhhh"))