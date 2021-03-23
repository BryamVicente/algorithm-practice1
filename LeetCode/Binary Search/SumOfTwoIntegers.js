
const getSum = (a, b) => {

    let sum;
    while((a & b) !== 0){
        console.log("This is before sum:" ,sum)
        sum = (a & b) << 1;
              //2 //3 << 1 ===> 0100 = 4
        console.log("This is after sum:",sum)
        // console.log("This is before a:",sum)
        a = a ^ b;
         //0010 0011 ===> 0001 = 1
        // console.log("This is after a:",sum)
        b = sum;
    }
    return a ^ b;
          //1 //4
}

console.log(getSum(2,3))


// 0001 = 1
     
// 0100 = 4

// 0101