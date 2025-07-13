/*
 * 1. Read the initialBoxes to get what boxes do we have available
 * 2. Use the initialBox index to check how many candies do we have on that position
 * 3. Use the initialBox index to check which containedBoxes do we have available
 * 3.1. Check if the box is open or not
 * 3.2. If so, repeat 2
 * 3.3. If not check if we have the key
 * 3.3.1. If so, repeat 2
 * 3.3.2. If not, go to the next containedbox
 * 3.4. If a key for a previous box were found, repeat 2 for that box.
 */

function maxCandies2(
  status: number[],
  candies: number[],
  keys: number[][],
  containedBoxes: number[][],
  initialBoxes: number[]
): number {
  let candiesCount = 0
  const availableKeys: number[] = []

  const getCandiesFromBox = (index: number) => {
    candiesCount += candies[index]

    containedBoxes[index].forEach(containedBox => {
      const isOpen = status[containedBox]
      availableKeys.push(...keys[containedBox])

      if (isOpen) {
        getCandiesFromBox(containedBox)
        return
      }

      if (availableKeys.includes(containedBox)) {
        getCandiesFromBox(containedBox)
        return
      }
    })
  }

  initialBoxes.forEach(getCandiesFromBox)

  return candiesCount
}
