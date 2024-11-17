function removeElement(nums: number[], val: number): number {
  let writeIndex = 0

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === val) continue
    nums[writeIndex] = nums[index]
    writeIndex++
  }

  return writeIndex
}
