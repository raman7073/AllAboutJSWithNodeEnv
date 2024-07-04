/*
  what does reduce return?
  Answer: The reduce() method executes a reducer function (that you provide)
   on each element of the array, resulting in single output value.


Binary Search Tree Implementation
Implemnt BST from array and reduce method
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const BST = [5, 4, 3, 2, 1].reduce((acc, val) => {
  if (!acc) {
    return new Node(val);
  }

  let current = acc;
  while (current) {
    if (val < current.value) {
      if (!current.left) {
        current.left = new Node(val);
        break;
      }
      current = current.left;
    } else {
      if (!current.right) {
        current.right = new Node(val);
        break;
      }
      current = current.right;
    }
  }

  return acc;
}, null);
// implement BST
const bst = (arr) => {
  return arr.reduce((acc, val) => {
    if (!acc) {
      return new Node(val);
    }

    let current = acc;
    while (current) {
      if (val < current.value) {
        if (!current.left) {
          current.left = new Node(val);
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = new Node(val);
          break;
        }
        current = current.right;
      }
    }

    return acc;
  }, null);
};
