// Recursive solution!!!

// const fib = (n) => {
//     if (n <= 2){
//         return 1
//     }
//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(40))


// Memoization Solution!!!

// const fib = (n) => {

//     let newArray =[]

//     if (newArray[n] !== undefined){
//         return newArray[n]
//     }
//     if (n <= 2){
//         return 1
//     }

//     let answer = fib(n-1, newArray) + fib(n-2, newArray)

//     newArray[n] = answer
//     return answer
// }

// console.log(fib(4))


// still memoization

// const fib = (n, memo =[]) => {
//     if (memo[n] !== undefined){
//         return memo[n]
//     }
//     if (n <= 2){
//         return 1
//     }

//     let res = fib(n-1, memo) + fib(n-2, memo)

//     memo[n] = res
//     return res
// }
 

// Tabulated Version 

const fib = (n) => {

    if (n <= 2){
        return 1
    }

    let fibNumbers = [undefined, 1, 1]

    for (let i =3; i <= n; i++){
        fibNumbers[i] = fibNumbers[i-1] + fibNumbers[i-2]
    }
    return fibNumbers[n]
}

console.log("Fib of 4: ",fib(4))
console.log("Fib of 20: ",fib(20))
console.log("Fib of 100: ",fib(100))
console.log("Fib of 2000",fib(2000))

