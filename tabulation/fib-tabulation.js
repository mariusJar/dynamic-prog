// Write a function `fib(n)` that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci sequence.
// the 0st number of the sequence is 0.
// the 1st number of the sequence is 1.
// To generate the next number of the sequence, we sum the previous two.

const fib = (n) => {
  const table = Array(n + 1).fill(0)
  table[1] = 1
  for (let i; i <= n; i++) {
    table[i + 1] += table[i]
    table[i + 2] += table[i]
  }

  return table[n]
}

fib(6) // 8
fib(7) // 13
fib(8) // 21
// fib(50); // 12586269025
