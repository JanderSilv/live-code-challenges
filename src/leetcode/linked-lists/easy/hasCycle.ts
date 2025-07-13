/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const history = new Set()
  while (head) {
    if (history.has(head)) return true
    history.add(head)
    head = head.next
  }
  return false
}

/* O(1) */
var hasCycle = function (head) {
  let start = new ListNode(head)
  while (head) {
    if (head.val === 'X') {
      return true
    }
    head.val = 'X'
    head = head.next
  }
  return false
}
