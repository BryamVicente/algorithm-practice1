/*
Write a function that takes an integer flightLength (in minutes) and an array of 
integers movieLengths (in minutes) and returns a boolean indicating whether there 
are two numbers in movieLengths whose sum equals flightLength.
*/
// Complexity ----> O(n) time and O(n) space 

function fillingTwoMoviesPerFlight(movieLengths, flightLength){
    const moveieTimeSet = new Set()

    for(let i = 0; i < movieLengths.length; i++){
        const currentNumber = movieLengths[i]
        const secondMovieTime = flightLength - currentNumber

        if(!moveieTimeSet.has(secondMovieTime)){
            moveieTimeSet.add(currentNumber)
        }else {
            return true
        }
    }
    return false
}

console.log(fillingTwoMoviesPerFlight([2,3,2,4], 6))
console.log(fillingTwoMoviesPerFlight([2,3,2,4,6], 8))
console.log(fillingTwoMoviesPerFlight([2,3,2], 6))
