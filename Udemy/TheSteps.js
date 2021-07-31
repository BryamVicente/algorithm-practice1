/*
Write a function that accepts a postive number N. The function 
should console log a step shape with N levels using the # character.
Make sure the step has spaces on the right hand side! 

-- Examples
steps(2)
'# '
'##'
steps(3)
'#  '
'## '
'###'
*/

// Solution #1
/*
const steps = (N) => {
// Create a for loop that iterates throw rows 
    for (let i = 0; i < N; i++){
        // Create empty string 
        let stairs = ''
        // Another for loop that iterates through the columns 
        for(let j = 0; j < N; j++ ){
        // if current column is less than or equal to the current row 
            if (j <= i){
            // add a "#" to empty string 
                stairs += "#"
            }else {
            // else add a space to the empty string 
                stairs += " "
            }
        }
        // console log the string that I created 
        console.log(stairs)
    }
}
console.log("Example 1: ", steps(2))
console.log("Example 2: ", steps(5))
*/

// Solution #2 -> recursion 

// Recursion: 
    // Figure out the bare minumum pieces of info to represent your problem 
    // Give reasonable default inputs for the problem 
    // Check the base case
    // Call function but change your arguments 


const steps = (N) => {
// similar to the last solution, we'll treat this as a table with rows and columns 
    // Base Case --> if row === n --> return; 

    //if the results string's length === n, I've reached end of row 

    // if the result string's length is <= the row --> add '#', if not add a space 

}