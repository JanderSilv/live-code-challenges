// given a integer array, find all the subsets
//
// Example:
// Input: [1, 2, 3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1, 2, 3],
//   [1, 3],
//   [2, 3],
//   [1, 2],
//   []
// ]

export const subsets = (nums: number[]): number[][] => {
  const result: number[][] = [[]]
  for (let i = 0; i < nums.length; i++) {
    const len = result.length
    for (let j = 0; j < len; j++) {
      result.push([...result[j], nums[i]])
    }
  }
  return result
}
