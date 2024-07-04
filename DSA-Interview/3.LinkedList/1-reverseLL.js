/*
   Given a linked list, reverse it.
*/

function reverseLL(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
function recursiveReverseLL(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let rest = recursiveReverseLL(head.next);
  head.next.next = head;
  head.next = null;
  return rest;
}
function printLL(head) {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
//head.next.next.next = new Node(4);
console.log(head);
console.log(reverseLL(head));
