/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeNumber = function (x) {
  return x.toString().split('').reverse().join('') === x.toString()
}

/**
 * @param {string} s
 * @return {boolean}
 */
const regex = /[\W, _]/g
var isPalindromeString = function (s) {
  const first = s.replaceAll(regex, '').split('').reverse().join('').toLowerCase()
  const second = s.replaceAll(regex, '').toLowerCase()
  console.log({ first, second })
  return first === second
}
