const maxProduct = (nums) => {
    let iMax = 0
    let jMax = 0;

    for (let num of nums) {
                        //0       ,     //0   //3
        iMax = Math.max(iMax, Math.min(jMax, num)); 
        //0             //0   //2 or 3
        jMax = Math.max(jMax, num);  //5
        
      
    }   
    // console.log(iMax) 
    // console.log(jMax)
    return (iMax - 1) * (jMax - 1);
  };
  console.log(maxProduct([7,3]))
  console.log(maxProduct([3,4,5,2]))
  console.log(maxProduct([1,5,4,5]))

