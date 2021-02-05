// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


//SOLUTION 2!!

function chunk(array, size) {
    let chunked = []
    let index = 0

    while (index < array.length){
       let slice = array.slice(index, index + size)
       chunked.push(slice)
       index += size
    }
    return chunked
}
console.log(chunk([1, 2, 3, 4, 5], 2))


/*

SOLUTION #1!!!!

function chunk(array, size) {
    let chunked = []

    for (let element of array){
        let lastEl = chunked[chunked.length - 1]
        if (!lastEl || lastEl.length === size){
            chunked.push([element])
        } else {
            lastEl.push(element)
        }
    }
    return chunked
}

console.log(chunk([1, 2, 3, 4, 5], 2))

*/