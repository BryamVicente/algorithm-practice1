/*
Write a function that accepts a string. The function should capitalize the first letter 
of each word in the string then return the capitalized string.

-- Examples:  
    capitalized('a short sentence') --> "A Short Sentence"
    capitalized('a lazy fox') --> "A Lazy Fox"
    capitalized('look, it is working!') --> "Look, It Is Working!"

*/

// if the word is "there"
    // word[0].toUpperCase --> T
    // word.slice(1) ---> here

const capitalize = (string) => {
    // Create empty array
    let words = []
    
    //split the input 'string'
    let splitString = string.split(' ')

    // create for loop to iterate 
    for (let word of splitString){
    // Upper case the first letter of the word, Join(+) first letter with rest of the string 
    //and Push result inside empty array
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    // Join the 'empty string' into a string and return 
   return words.join( ' ')
}
console.log(capitalize('a short sentence'))


