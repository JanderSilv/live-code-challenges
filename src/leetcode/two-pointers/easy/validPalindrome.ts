const regex = /[\W, _]/g

const isPalindrome = (s: string) => {
  const first = s.replaceAll(regex, '').split('').reverse().join('').toLowerCase()
  const second = s.replaceAll(regex, '').toLowerCase()
  return first === second
}
