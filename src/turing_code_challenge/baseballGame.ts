const calPoint = (ops: string[]) => {
  const record: number[] = []

  for (const op of ops) {
    const value = Number(op)
    if (value) {
      record.push(value)
      continue
    }
    switch (op) {
      case 'C':
        record.pop()
        break
      case 'D':
        const doubledValue = record.at(-1) * 2
        record.push(doubledValue)
        break
      case '+':
        const sum = record.at(-2) + record.at(-1)
        record.push(sum)
        break
      default:
        break
    }
  }

  const result = record.reduce((acc, cur) => acc + cur, 0)
  return result
}

console.log(calPoint(['5', '2', 'C', 'D', '+']))
console.log(calPoint(['5', '-2', '4', 'C', 'D', '9', '+', '+']))
console.log(calPoint(['1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '+', '+', '+']))
console.log(calPoint(['1']))
