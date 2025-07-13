const digits = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (roman) {
  let lastDigit = null
  const sum = [...roman].reduce((acc, digit) => {
    let currentNumber = digits[digit]
    let isSubtraction = false
    let result = null

    if (['V', 'X'].includes(digit) && lastDigit === 'I') {
      currentNumber = digits[digit] - 1
      isSubtraction = true
    } else if (['L', 'C'].includes(digit) && lastDigit === 'X') {
      currentNumber = digits[digit] - 10
      isSubtraction = true
    } else if (['D', 'M'].includes(digit) && lastDigit === 'C') {
      currentNumber = digits[digit] - 100
      isSubtraction = true
    }

    if (isSubtraction) result = acc - digits[lastDigit] + currentNumber
    else result = acc + currentNumber
    lastDigit = digit
    return result
  }, 0)
  return sum
}

/**
 * @param {string} roman
 * @return {number}
 */
var romanToInt2 = function (roman) {
  let sum = 0
  let numbers = []

  for (const digit of roman) numbers.push(digits[digit])

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[i + 1]) {
      sum += numbers[i + 1] - numbers[i]
      i++
    } else sum += numbers[i]
  }

  return sum
}
