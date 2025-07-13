function answerString(word: string, numFriends: number): string {
  if (numFriends === 1) return word

  const wordLength = word.length
  let response = ''

  for (let index = 0; index < wordLength; index++) {
    let substring = word.substring(index, Math.min(index + wordLength - numFriends + 1, wordLength))
    if (substring > response) response = substring
  }

  return response
}
