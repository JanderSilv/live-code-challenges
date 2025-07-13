export function rotate(nums: number[], k: number): void {
  for (let step = 0; step < k; step++) nums.unshift(nums.pop())
}

export function badPerformanceRotate(nums: number[], k: number): void {
  /*
      1. Store the last num at a variable
      2. Move all numbers to index + 1
      3. Assign stored num at first position
      4. Repeat the process k times
  */

  for (let step = 1; step <= k; step++) {
    const lastNumber = nums.at(-1)

    for (let index = nums.length - 1; index !== 0; index--) {
      nums[index] = nums[index - 1]
    }

    nums[0] = lastNumber
  }
}
