
const PlusMinus = (arr) => {
    let n = arr.length
    let neg = []
    let pos = []
    let zer = []
    for(let i = 0; i < arr.length; i++){
        if (arr[i]< 0 ){
            neg.push(arr[i])
        } if (arr[i] > 0){
            pos.push(arr[i])
         }if  (arr[i] ===0){
            zer.push(arr[i]) 
        }          
    }
    console.log("neg", neg.length/n)
    console.log("pos", pos.length/n)
    console.log("zer", zer.length/n )
  // count the array length ==> N 
  // create empty hash for key value pairs 
  // iterate over the array 
    // if arr [i] < 0 ==>
    // if arr[i] > 0 ==>
    // if arr[i] = 0 ==>
  // grab arr[i]  and divide by N 
  //return 3 values 
}
console.log(PlusMinus([-1, 2, -3, 0, 4, 8]))