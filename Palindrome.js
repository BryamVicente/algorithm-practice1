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

function hasPalindromePermutation(theString) {

    // Track characters we've seen an odd number of times
    const unpairedCharacters = new Set();
  
    for (let char of theString) {
      if (unpairedCharacters.has(char)) {
        unpairedCharacters.delete(char);
      } else {
        unpairedCharacters.add(char);
      }
    }
  
    // The string has a palindrome permutation if it
    // has one or zero characters without a pair
    return unpairedCharacters.size <= 1;
  }
console.log(hasPalindromePermutation("civic"))