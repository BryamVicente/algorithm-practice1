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

function reverse(str){

    let reversedString = ''

    // this for loop syntax is from ES2015
    for(let character of str){
        reversedString = character + reversedString
    }
    return reversedString
}

console.log(reverse("hello"))