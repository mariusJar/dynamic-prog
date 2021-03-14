// Write a function howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
// The function should return an array containing any combination of elements that add up to exactly a targetSum.
// If there is no such a combination return null;
// If there are multiple combinations possible, return any single one.

const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (let n of numbers) {
    const remainder = targetSum - n
    const remainderResult = howSum(remainder, numbers)
    if (remainderResult !== null) {
      return [...remainderResult, n]
    }
  }

  return null
}

// m - target sum
// n - numbers.lenght

// Brute Force
// time O(n^m * m)
// space O(m)

console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])) // [4, 3]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2]
// console.log(howSum(300, [7, 14])) // null

// _______________howSum Memoization____________________

const howSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (let n of numbers) {
    const remainder = targetSum - n
    const remainderResult = howSumMemo(remainder, numbers, memo)
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, n]
      return memo[targetSum]
    }
  }

  memo[targetSum] = null
  return null
}

// m - target sum
// n - numbers.lenght

// Memoized
// time O(n * m^2)
// space O(m^2)

console.log(howSumMemo(7, [2, 3])) // [3, 2, 2]
console.log(howSumMemo(7, [5, 3, 4, 7])) // [4, 3]
console.log(howSumMemo(7, [2, 4])) // null
console.log(howSumMemo(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSumMemo(300, [7, 14])) // null
