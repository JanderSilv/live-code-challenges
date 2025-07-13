function longestCommonPrefix(strs: string[]): string {
  let longestPrefix = ''
  let charIndex = 0
  let checkingChar = ''

  for (let wordIndex = 0; wordIndex < strs.length; wordIndex++) {
    const word = strs[wordIndex]
    const char = word[charIndex]

    if (!char) continue

    if (!checkingChar) {
      checkingChar = char
      continue
    }

    if (checkingChar !== char) return longestPrefix

    if (wordIndex === strs.length - 1) {
      charIndex++
      checkingChar = ''
      longestPrefix += char
      wordIndex = -1
      continue
    }
  }

  return longestPrefix
}
