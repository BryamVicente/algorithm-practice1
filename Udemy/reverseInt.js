// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num){

  let reversed = 0

  while (num != 0){
    reversed = reversed * 10 + num % 10
    /*The second argument for parseInt() states it's radix. 
    Since we're going by decimal that's why I chose 10
    */
    num = parseInt(num / 10, 10)
  }
  return reversed
}
console.log(reverseInt(23))

//UDEMY SOLUTION!!

// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('')

//     return parseInt(reversed) * Math.sign(n)
// }

