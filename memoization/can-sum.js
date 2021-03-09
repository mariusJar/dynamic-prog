// Write a function canSun(targetSum, numbers) that takes in a target sum and an array of numbers as arguments.
// The function should return a boolean indicating whatever or not its possible to generate target sum using numbers in the array.
// You may use an element of the array as many times as you want.
// All input numbers are nonnegative.

const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true
  if (targetSum < 0) return false

  for (let n in numbers) {
    const remainder = targetSum - n
    if (canSum(remainder, numbers) === true) {
      return true
    }
  }

  return false
}

canSum(7, [2, 3]) // true
canSum(7, [5, 3, 4, 7]) // true
canSum(7, [2, 4]) // false
canSum(8, [2, 3, 5]) // true
// canSum(300, [7, 14]); // false

// _______________canSum Memoization_________________

const canSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return true
  if (targetSum < 0) return false

  for (let n in numbers) {
    const remainder = targetSum - n
    if (canSumMemo(remainder, numbers, memo) === true) {
      memo[targetSum] = true
      return true
    }
  }

  memo[targetSum] = false
  return false
}

canSumMemo(7, [2, 3]) // true
canSumMemo(7, [5, 3, 4, 7]) // true
canSumMemo(7, [2, 4]) // false
canSumMemo(8, [2, 3, 5]) // true
canSumMemo(300, [7, 14]) // false
