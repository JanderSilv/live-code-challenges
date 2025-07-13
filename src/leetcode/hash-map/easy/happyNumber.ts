function isHappy(n: number): boolean {
  /*
   * 1. Parse number to string and split
   * 2. Parse each digit to number, square each one, and sum
   * 3. Store the result, check if is 1, case not, do it all again.
   */

  const visitedNumbers = [n]

  while (true) {
    const stringDigits = visitedNumbers.at(-1).toString().split('')

    const result = stringDigits.reduce((acc, stringDigit) => {
      const squaredDigit = Math.pow(Number(stringDigit), 2)
      return acc + squaredDigit
    }, 0)

    if (result === 1) return true
    if (visitedNumbers.includes(result)) return false

    visitedNumbers.push(result)
  }
}
