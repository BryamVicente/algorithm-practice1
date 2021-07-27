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
    }
    // console log the string that I created 
}
console.log("Example 1: ", steps(2))


// Solution #2 -> recursion 