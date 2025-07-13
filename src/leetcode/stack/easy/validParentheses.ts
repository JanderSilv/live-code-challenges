/*
 * 1. Initialize an empty stack
 * 2. Iterate over "s"
 * 3. If the char is an opening bracket, push to stack
 * 4. If the stack is empty, or the last stack char is different than char, return false
 */

function isValid(s: string): boolean {
  const stack: string[] = []
  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  }
  const bracketOpenings = Object.values(bracketMap)

  for (let char of s) {
    if (bracketOpenings.includes(char)) {
      stack.push(char)
      continue
    }

    if (!stack.length || stack.pop() !== bracketMap[char]) return false
  }

  return !stack.length
}
