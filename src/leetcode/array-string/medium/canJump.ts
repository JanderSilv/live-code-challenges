function canJump(nums: number[]): boolean {
  if (nums.length === 1) return true

  const lastIndex = nums.length - 1
  let targetIndex = lastIndex

  for (let index = lastIndex - 1; index >= 0; index--) {
      const num = nums[index]
      const jump = num + index

      if (jump >= targetIndex) targetIndex = index

      if (targetIndex === 0) return true
  }

  return false
}