var reverseList = function (head) {
  let list = new ListNode()
  let listHead = list
  const stack = []

  while (head !== null) {
    stack.push(head.val)
    head = head.next
  }

  while (stack.length !== 0) {
    listHead.next = new ListNode(stack.pop())
    listHead = listHead.next
  }

  return list.next
}

/**
    list = ListNode
    listHead = list
    
    result = []
    
    loop while head isn't null
    
     | 
    [1,2,3,4,5]
    
    result.push(head.val)
    
    end loop
    
    loop over result until is empty
    head.next = result.pop()
    head.next
    end loop
    
**/

/* 
Time Complexity: O(n), Linear - traverse linked list only once
Space Complexity: O(1), Constant - we will only have 2 pointers regardless of size of input; prev and temp
*/
var reverseList = function (head) {
  let previousNode = null

  while (head !== null) {
    const nextNode = head.next
    head.next = previousNode
    previousNode = head
    head = nextNode
  }

  return previousNode
}

/**
    head: [null]
    previousNode: [5 4 3 2 1 null]
    nextNode: [null]
**/
