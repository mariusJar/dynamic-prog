// Say that you are a traveler on 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner.
// You may only move down or right. In how many ways you can travel to a goal on a grid with dimensions m * n?
// Write a function gridTraveler(m, n) that calculates this.

const gridTraveler = (m, n) => {
  if (m === 1 || n === 1) return 1
  if (m === 0 || n === 0) return 0

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6
// console.log(gridTraveler(18, 18)); // 2333606220

// _________gridTraveler__Memoiization________________

const gridTravelerMemo = (m, n, memo = {}) => {
  const i = m + ';' + n
  if (i in memo) return memo[i]
  if (m === 1 || n === 1) return 1
  if (m === 0 || n === 0) return 0
  memo[i] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo)
  return memo[i]
}

console.log(gridTravelerMemo(1, 1)) // 1
console.log(gridTravelerMemo(2, 3)) // 3
console.log(gridTravelerMemo(3, 2)) // 3
console.log(gridTravelerMemo(3, 3)) // 6
console.log(gridTravelerMemo(18, 18)) // 2333606220
