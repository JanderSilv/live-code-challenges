function isSubsequence(s: string, t: string): boolean {
  let greatestFoundCharIndex = -1

  for (const sChar of s) {
    const foundCharIndex = t.indexOf(sChar, greatestFoundCharIndex + 1)

    if (foundCharIndex !== -1) {
      if (foundCharIndex < greatestFoundCharIndex) return false
      greatestFoundCharIndex = foundCharIndex
      continue
    }
    return false
  }

  return true
}
