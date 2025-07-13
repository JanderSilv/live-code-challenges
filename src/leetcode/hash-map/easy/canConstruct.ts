/*
 * 0. Create a hash map, the key will be each character from magazine, and value is zero (count)
 * 1. Iterate over each ransomNote character
 * 2. Check if hash map has the character
 * 2.1. If so, decrease count, continue
 * 2.2. If not, return false
 * 3. Out of loop, return true
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineCharsMap = new Map()

  for (const char of magazine) {
    const charCount = magazineCharsMap.get(char)
    magazineCharsMap.set(char, charCount ? charCount + 1 : 1)
  }

  for (const char of ransomNote) {
    const charCount = magazineCharsMap.get(char)

    if (charCount) {
      magazineCharsMap.set(char, charCount - 1)
      continue
    }

    return false
  }

  return true
}
