// Write a function canSun(targetSum, numbers) that takes in a target sum and an array of numbers as arguments.
// The function should return a boolean indicating whatever or
// not its possible to generate target sum using numbers in the array.
// You may use an element of the array as many times as you want.
// All input numbers are nonnegative.

const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false)
  table[0] = true

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true
      }
    }
  }

  return table[targetSum]
}

canSum(7, [2, 3]) // true
canSum(7, [5, 3, 4, 7]) // true
canSum(7, [2, 4]) // false
canSum(8, [2, 3, 5]) // true
canSum(300, [7, 14]) // false
