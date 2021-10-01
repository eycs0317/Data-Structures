//Binary Search Tree
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return
    } else {
      let current = this.root;

      while(true) {
        if(value < current.value) {
          if(!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if(!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  lookup(value) {
    if(!this.root) {
      return false;
    }
    let current = this.root;
    while(true) {
      if(current.value === value) {
        console.log('1')
        return true;
      }
      if(value > current.value) {
        if(current.right) {
          current = current.right
        } else {
          console.log('2')
          return false;
        }
      } else {
        if(current.left) {
          current = current.left
        } else {
          console.log('3')
          return false;
        }
      }
    }
  }
  remove(value) {

  }
}


//       9
//   4       20
// 1   6   15 170

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(21))

console.log(JSON.stringify(traverse(tree.root)))

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}