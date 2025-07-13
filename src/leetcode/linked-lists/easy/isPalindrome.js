const isPalindrome = head => {
  let auxHead = head
  const stack = []

  while (auxHead !== null) {
    stack.push(auxHead.val)
    auxHead = auxHead.next
  }

  while (stack.length !== 0) {
    if (head.val === stack.pop()) {
      head = head.next
      continue
    }
    return false
  }

  return true
}
