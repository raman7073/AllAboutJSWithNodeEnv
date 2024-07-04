/*
  Given a linked list and two integers m and n, 
  return it back with only positions m to n reversed.

  Example:
    Input: 1 -> 2 -> 3 -> 4 -> 5 -> null, m = 2, n = 4
    Output: 1 -> 4 -> 3 -> 2 -> 5 -> null

*/

const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

var reverseBetween = function (head, m, n) {
  if (m === n) {
    return head;
  }

  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;

  for (let i = 0; i < m - 1; i++) {
    prev = prev.next;
  }

  let current = prev.next;
  let next = current.next;

  for (let i = 0; i < n - m; i++) {
    current.next = next.next;
    next.next = prev.next;
    prev.next = next;
    next = current.next;
  }

  return dummy.next;
};
