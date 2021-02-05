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

const reverseInt = (num) => {
    let rev = 0;
    
    while (num != 0) {
      rev = rev * 10 + num % 10;
      num = parseInt(num / 10, 10);
    }
    
    return rev;
  };



//UDEMY SOLUTION!!

// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('')

//     return parseInt(reversed) * Math.sign(n)
// }