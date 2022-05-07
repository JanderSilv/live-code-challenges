type Return = {
  mostRepeatedChar: string
  calculate: () => void
}

export const useGetMostRepeatedCharacter = (inputString: string): Return => {
  const [mostRepeatedChar, setMostRepeatedChar] = useState('')

  const calculate = () => {
    const chars = new Map()
    let highestCounter = { char: null, count: null }

    for (const char of inputString) {
      const currentCharCount = chars.get(char) ?? 0
      if (!currentCharCount) chars.set(char, 1)
      else {
        const newCount = currentCharCount + 1
        chars.set(char, newCount)
        if (newCount > highestCounter.count)
          highestCounter = {
            char,
            count: newCount,
          }
      }
    }

    setMostRepeatedChar(highestCounter.char)
  }

  return {
    calculate,
    mostRepeatedChar,
  }
}
