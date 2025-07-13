function isAnagram(s: string, t: string): boolean {
  const sortString = (value: string) => value.split('').sort().join('')
  return sortString(s) === sortString(t)
}
