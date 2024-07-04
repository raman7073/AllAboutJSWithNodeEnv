class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

// ---- Generate our linked list ----

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

// --------- Our solution -----------

var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  return prev;
};

var reverseListRecursive = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let newHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

printList(linkedList);
console.log("after reverse");
var reversedList = reverseList(linkedList);
printList(reversedList);
console.log("after reverse recursive");
printList(reverseListRecursive(reversedList));
