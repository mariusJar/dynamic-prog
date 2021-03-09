// Write a function canConstruct(target, wordBank) that accepts a target string and an array of strings.
// The function should return a boolean indicating whether or not the "target" can be constructed by concatenating elements of the "wordBank" array.
// You may reuse elements of "wordBank" as many times as needed.
// NOTE: dont take string from a middle of the target, because that will change the target string.

const canConstruct = (target, wordBank) => {
  if (target === '') {
    return true
  }

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      if (canConstruct(suffix, wordBank) === true) {
        return true
      }
    }
  }

  return false
}

console.log(canConstruct('abcdf', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
) // false
console.log(
  canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
) // true
// console.log(
//   canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeee',
//   ])
// ) // false

// _______________canConstruct Memoization_________________________

const canConstructMemo = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return true

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      if (canConstructMemocanConstructMemo(suffix, wordBank, memo) === true) {
        memo[target] = true
        return true
      }
    }
  }

  memo[target] = false
  return false
}

console.log(canConstructMemo('abcdf', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(
  canConstructMemo('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
) // false
console.log(
  canConstructMemo('enterapotentpot', [
    'a',
    'p',
    'ent',
    'enter',
    'ot',
    'o',
    't',
  ])
) // true
console.log(
  canConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
) // false
