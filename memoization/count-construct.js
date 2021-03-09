// Write a function countConstruct(target, wordBank) that accepts a target string and an array of strings.
// This function should return a number of ways that the target string can be constructed by concatinating elements of the wordBank array.
// You may reuse elements of "wordBank" as many times as needed.

const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return 1

  let totalCount = 0

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWays = countConstruct(target.slice(word.length), wordBank, memo)
      totalCount += numWays
    }
  }

  memo[target] = totalCount
  return totalCount
}

console.log(canConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(canConstruct('abcdf', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
) // 0
console.log(
  canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
) // 4
console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
) // 0
