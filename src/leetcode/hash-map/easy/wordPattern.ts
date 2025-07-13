function wordPattern(pattern: string, s: string): boolean {
  const sArray = s.split(' ')
  const patternLength = pattern.length

  if (patternLength !== sArray.length) return false

  const patternMap = new Map()
  const sMap = new Map()

  for (let index = 0; index < patternLength; index++) {
    const char = pattern[index]
    const word = sArray[index]

    if ((patternMap.has(char) && patternMap.get(char) !== word) || (sMap.has(word) && sMap.get(word) !== char))
      return false

    patternMap.set(char, word)
    sMap.set(word, char)
  }

  return true
}
