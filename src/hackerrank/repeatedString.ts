function repeatedString(s: string, n: number) {
  let howManyAsSHas = 0
  for (const char of s) char === 'a' && howManyAsSHas++

  const sLength = s.length
  const howMuchStringsNFits = Math.floor(n / sLength)
  const rest = n % sLength

  const slicedS = s.slice(0, rest)
  let howManyAsSlicedSHas = 0
  for (const char of slicedS) char === 'a' && howManyAsSlicedSHas++

  const count = howManyAsSHas * howMuchStringsNFits + howManyAsSlicedSHas

  return count
}
