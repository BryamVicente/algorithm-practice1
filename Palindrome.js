/*
- Write a function that check whether any permutation 
of an input string is a palindrome.
- Examples: 
    * "civic" // true
    * "civil" // false
*/

//Solution 1: My way 

/*
function palindrome(string){
   let reversed = string.split('').reduce((rev, char) => char + rev, '')
   return string === reversed
}

console.log(palindrome("civic"))
*/

//-----------------------------------------------------------------------------------------//


//Solution 2: Interview Cake Solution
    //Complexity: O(n) time and O(n) space 

// function hasPalindromePermutation(theString) {

//     const unpairedCharacters = new Set();
  
//     for (let char of theString) {
//       if (unpairedCharacters.has(char)) {
//         unpairedCharacters.delete(char);
//       } else {
//         unpairedCharacters.add(char);
//       }
//     }
  
  
//     return unpairedCharacters.size <= 1;
//   }
// console.log(hasPalindromePermutation("civic"))

//-----------------------------------------------------------------------------------------//

// Solution 3: 

function palindrome(str){
  
  let reverse = ''

  for (let character of str){
    reverse = character + reverse
  }
  return str === reverse
}

console.log(palindrome("civic"))