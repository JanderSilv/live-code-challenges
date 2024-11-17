function removeDuplicates(nums: number[]): number {
  const auxNums = [...new Set(nums)]
  nums = auxNums
  return auxNums.length
}

export { removeDuplicates }

function removeDuplicates2(nums: number[]): number {
  let counter = 0
  const uniqueNums: number[] = []

  for (const num of nums) {
    if (uniqueNums.includes(num)) continue

    uniqueNums.push(num)
    nums[counter] = num
    counter++
  }

  return counter
}
