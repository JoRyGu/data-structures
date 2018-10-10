class BinarySearchTree {
  constructor(root) {
    this.root = new BinaryNode(root);
  }

  insert(value) {
    let currentNode = this.root;
    while(true) {
      if(value > currentNode.getValue()) {
        if(currentNode.getRightChild() === null) {
          currentNode.setRightChild(value);
          currentNode.getRightChild().setParent(currentNode);
          return;
        } else {
          currentNode = currentNode.getRightChild();
        }
      } else if(value === currentNode.getValue()) {
        console.log(value, 'is equal to currentNode\'s value of', currentNode.getValue());
        return;
      } else {
        if(currentNode.getLeftChild() === null) {
          currentNode.setLeftChild(value);
          currentNode.getLeftChild().setParent(currentNode);
          return;
        } else {
          currentNode = currentNode.getLeftChild();
        }
      }
    }
  }

  valueExists(value) {
    let currentNode = this.root;
    while(currentNode) {
      if(value === currentNode.getValue()) {
        return true;
      }

      if(value > currentNode.getValue()) {
        currentNode = currentNode.getRightChild();
      }

      if(value < currentNode.getValue()) {
        currentNode = currentNode.getLeftChild();
      }
    }
    return false;
  }

  distanceBetween(val1, val2) {

    function distanceFromRoot(val) {
      let distance = 0;
      let currentNode = this.root;
      while(true) {
        if(val === currentNode.getValue()) {
          return distance;
        }

        if(val > currentNode.getValue()) {
          currentNode = currentNode.getRightChild();
          distance++;
        }

        if(val < currentNode.getValue()) {
          currentNode = currentNode.getLeftChild();
          distance++;
        }
      }
    }
    distanceFromRoot = distanceFromRoot.bind(this);

    return distanceFromRoot(val1) + distanceFromRoot(val2);
  }

  getRoot() {
    return this.root;
  }
}

class BinaryNode {
  constructor(value) {
    this.rightChild = null;
    this.leftChild = null;
    this.parent = null;
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  getRightChild() {
    return this.rightChild;
  }

  getLeftChild() {
    return this.leftChild;
  }

  setRightChild(value) {
    this.rightChild = new BinaryNode(value);
  }

  setLeftChild(value) {
    this.leftChild = new BinaryNode(value);
  }

  setParent(existingNode) {
    this.parent = existingNode;
  }
}

const bst = new BinarySearchTree(8);
bst.insert(3);
bst.insert(1);
bst.insert(6);
bst.insert(4);
bst.insert(7);
bst.insert(10);
bst.insert(14);
bst.insert(13);
bst.distanceBetween(4, 10);
