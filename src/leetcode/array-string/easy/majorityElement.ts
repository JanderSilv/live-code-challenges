function majorityElement(nums: number[]): number {
  if (nums.length === 1) return nums[0]

  const majorityMap = new Map()
  let majority = { num: null, count: 0 }

  for (const num of nums) {
    const numCount = majorityMap.get(num)

    if (!numCount) {
      majorityMap.set(num, 1)
      continue
    }

    const newCount = numCount + 1
    majorityMap.set(num, newCount)
    if (newCount > majority.count) majority = { num, count: newCount }
  }

  return majority.num
}
