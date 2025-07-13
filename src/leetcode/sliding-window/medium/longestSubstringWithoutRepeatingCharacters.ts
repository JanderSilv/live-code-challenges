function lengthOfLongestSubstring(s: string): number {
  // 1. Iterate over the string, store the substring, adding character by character, stop when to find a repeated character
  //  1.1. If the length of this substring is bigger the last stored one, store this substring

  let auxString = s
  let auxSubstring = ''
  let longestSubstring = ''

  const checkAndStoreLongestSubstring = () => {
    if (auxSubstring.length > longestSubstring.length) longestSubstring = auxSubstring
  }

  for (let index = 0; index <= auxString.length; !auxSubstring ? (index = 0) : index++) {
    const char = auxString[index]

    if (!char) {
      checkAndStoreLongestSubstring()
      break
    }

    if (!auxSubstring.includes(char)) {
      auxSubstring += char
      checkAndStoreLongestSubstring()
    } else {
      const repeatedCharIndex = auxString.indexOf(char)
      auxString = auxString.slice(repeatedCharIndex + 1)

      checkAndStoreLongestSubstring()
      auxSubstring = ''
    }
  }

  return longestSubstring.length
}

export { lengthOfLongestSubstring }
