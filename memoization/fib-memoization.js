// Write a function `fib(n)` that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci sequence.

// Fibonacci sequence - the 1st and 2nd number of the sequence is 1.
// To generate the next number of the sequence, we sum the previous two.

// n:      1, 2, 3, 4, 5, 6,  7,  8,  9, ...
// fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// fib(7) = 5 + 8 = 13

const fib = (n) => {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(6)) // 8
console.log(fib(7)) // 13
console.log(fib(8)) // 21
// console.log(fib(50)); // 12586269025

// Fib function O(2^n) time
// fib(50) = 2^50 steps = 1.12e+15
// One of the main points in dynamic programming is finding duplicates.

// memoization
// js object, keys will be arg to fn, value will the return value

const fibMemo = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n <= 2) return 1
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo)
  return memo[n]
}

console.log(fibMemo(6)) // 8
console.log(fibMemo(7)) // 13
console.log(fibMemo(8)) // 21
console.log(fibMemo(50)) // 12586269025
