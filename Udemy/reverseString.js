// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// Solution to show off! 

// function reverse(str) {
   
//     return str.split('').reduce( (rev, char) => char + rev,'')
// }

// SOLUTION THAT I SHOULD KNOW!!
// Complexity = O(n) time and I think O(1) space 

    //Step 1: Create an empty string called "reversedString"
    //Step 2: For each character in the provided string, take the character and add it to the start or "reversedString"
    //Step 3: Return the variable "reversedString"
    
function reverse(str){

    let reversedString = ''

    // this for loop syntax is from ES2015
    for(let character of str){
        reversedString = character + reversedString
    }
    return reversedString
}

console.log(reverse("hello"))
