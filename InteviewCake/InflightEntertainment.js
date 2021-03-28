/*
Write a function that takes an integer flightLength (in minutes) and an array of 
integers movieLengths (in minutes) and returns a boolean indicating whether there 
are two numbers in movieLengths whose sum equals flightLength.
*/
// Complexity ----> O(n) time and O(n) space 
function fillingTwoMoviesPerFlight(movieLengths, flightLength){
    const movieLengthsSeen = new Set()

    for(let i = 0; i < movieLengths.length; i++){
        const firstMovieLength = movieLengths[i]
        const matchingSecondMovieLength = flightLength - firstMovieLength

        if(!movieLengthsSeen.has(matchingSecondMovieLength)){
            movieLengthsSeen.add(firstMovieLength)
        }else {
            return true
        }
    }
    return false
}

console.log(fillingTwoMoviesPerFlight([2,3,2,4], 6))

