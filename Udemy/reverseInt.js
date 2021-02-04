// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// This seemed to work for some reason

function reverseInt(n) {
    // let reversed = n.toString()

    for (let number of n){
        n = number + n
    }
    return n
}

console.log(reverseInt(1122))



//UDEMY SOLUTION!!

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('')

    return parseInt(reversed) * Math.sign(n)
}