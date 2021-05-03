const maxProduct = (nums) => {
  // I need to create two variables the represent the max values for i and j
    // iMax and jMax
  let iMax = 0
  let jMax = 0;
  
  // I need to iterate over the nums array
  for (let num of nums) {
    // iMax should be equal to the max number between 0 and jmax
    iMax = Math.max(iMax, Math.min(jMax, num))
    // jMax should be equal to the max number between 0 and the current number being iterated in the nums array 
    jMax = Math.max(jMax, num)
  // End iteration
  }
  // Return (nums[i]-1)*(nums[j]-1)
  return (iMax - 1) * (jMax - 1)
};
console.log('1st: ',maxProduct([3,4,5,2]))
console.log('2nd: ',maxProduct([1,5,4,5]))
console.log('3rd: ',maxProduct([3,7]))
console.log('4th: ',maxProduct([0]))




// for (let num of nums) {
  
  //     iMax = Math.max(iMax, Math.min(jMax, num)); 
  
  //     jMax = Math.max(jMax, num); 
  
  
  // }   
  // return (iMax - 1) * (jMax - 1);
  // console.log(maxProduct([1,5,4,5]))
  // console.log(maxProduct([7,3]))