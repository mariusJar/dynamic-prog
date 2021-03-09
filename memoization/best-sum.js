// Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
// The function should return an array that contains the shortest combination of numbers that adds up to the targetSum.
// If there is a tie for shortest combination any can be returned.

const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderCombination = bestSum(remainder, numbers)
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num]
      // if combination is shorter then current shortest update it.
      if (
        shortestCombination === null ||
        combination.lenght < shortestCombination.lenght
      ) {
        shortestCombination = combination
      }
    }
  }

  return shortestCobination
}

// m - target sum
// n - numbers.lenght

// Brute Force
// time O(n^m * m)
// space O(m^2)

bestSum(7, [5, 3, 4, 7]) // [7]
bestSum(8, [2, 3, 5]) // [4, 4]
// bestSum(100, [1, 2, 5, 25]) // [25, 25, 25, 25]

// _______________bestSum Memoization___________________

const bestSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderCombination = bestSumMemo(remainder, numbers, memo)
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num]
      // if combination is shorter then current shortest update it.
      if (
        shortestCombination === null ||
        combination.lenght < shortestCombination.lenght
      ) {
        shortestCombination = combination
      }
    }
  }

  memo[targetSum] = shortestCobination
  return shortestCobination
}

// m - target sum
// n - numbers.lenght

// Memoized
// time O(n * m^2)
// space O(m^2)

bestSumMemo(7, [5, 3, 4, 7]) // [7]
bestSumMemo(8, [2, 3, 5]) // [4, 4]
bestSumMemo(100, [1, 2, 5, 25]) // [25, 25, 25, 25]
