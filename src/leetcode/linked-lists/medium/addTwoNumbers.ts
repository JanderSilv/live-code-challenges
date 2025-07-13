// Add Two Numbers - Linked List.
function ListNode(val?, next?) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = 0
  let List = new ListNode()
  let head = List

  while (l1 || l2 || sum > 0) {
    let carry = 0

    if (l1 !== null) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2 !== null) {
      sum += l2.val
      l2 = l2.next
    }

    if (sum > 9) {
      sum %= 10
      carry = 1
    }

    head.next = new ListNode(sum)
    head = head.next
    sum = carry
  }

  return List.next
}

/*
    sum = 0
    list = ListNode (7 -> 1 -> 8 -> 0)
    head = list
    -- loop --
    carry = 0

                 | 
   (2 -> 4 -> 3) l1
                 |
  (5 -> 6 -> 4) l2

  sum > 9, sum = sum % 10, carry = 1

  head.next = ListNode(sum)
  head = head.next
  sum = carry

  1. creates a variable to hold the sum of each iteration
  2. creates a new linked list to store the results
  3. create head of new list.
  4. if l1 or l2 is not null, add the value to the new list. move pointer to next node.
  5. add values that our two pointers are pointing to.
  6. if the sum is greater than 9, add to sum, sum mod 10, and set carry to 1.
*/
