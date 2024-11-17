function removeDuplicates(nums: number[]): number {
  let counter = 0
  const uniqueNumsMap = new Map([...new Set(nums)].map(num => [num, 0]))

  for (const num of nums) {
    const numCount = uniqueNumsMap.get(num)

    if (numCount < 2) {
      uniqueNumsMap.set(num, numCount + 1)
      nums[counter] = num
      counter++
      continue
    }
  }

  return counter
}

export { removeDuplicates }
