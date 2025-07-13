const isPalindromeNumber = (x: number) => {
  return x.toString().split('').reverse().join('') === x.toString()
}
