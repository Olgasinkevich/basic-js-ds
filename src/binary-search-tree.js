const {NotImplementedError} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BinarySearchTree {
  constructor() {
    /*  this.tree = [];*/
    this.root = null;
  }

  root() {
    return this.root;
  }

  _addNode(node, data) {
    if (!node) {
      return new Node(data);
    }
    if (node.data === data) {
      return node;
    }
    if (data < node.data) {
      node.left = _addnode(node.left, data)
    } else {
      node.right = _addNode(node.right, data);
    }
    return node;
  }

  add(data) {
    this.root = this._addNode(this.root, data);
  }

  _searchNode(node, data) {
    if (!node) {
      return false;
    }
    if (node.data === data) {
      return true;
    }
    return data < node.data ?
        this._searchNode(node.left, data) :
        this._searchNode(node.right, data);
  }

  has(data) {
    return this._searchNode(this.root, data);

  }

  _findNode(node, data) {
    if (!node || !node.data === data) {
      return null;
    }
    return node;
  }

  find(data) {
    return this._findNode(this.root, data);

  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.root) {
      return null;
    }
    let min = this.root;
    while (node.left) {
      min = node.left;

      return node.data;
    }
  }

  max() {
    if (!this.root) {
      return null;
    }
    let max = this.root;
    while (node.right) {
      max = node.right;
    }
    return node.data;
  }
}
