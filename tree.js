/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(currentNode=this.root) {
    if(currentNode=null){
      return 0
    }
    let returnVal = currentNode.val
    for(let node of currentNode.children){
      returnVal += sumValues(node)
    }
    return returnVal
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(currentNode=this.root) {
    if(currentNode == null){
      return 0
    }
    if(currentNode.val % 2 == 0){
      let returnVal = 1
    } else {
      let returnVal = 0
    }
    for(let node of currentNode.val){
      returnVal += this.countEvens(node)
    }
    return returnVal
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound, currentNode=this.root) {
    if(currentNode == null){
      return 0
    }
    if(currentNode.val > lowerBound){
      let returnVal = 1
    } else {
      let returnVal = 0
    }
    for(let node of currentNode.val){
      returnVal += this.numGreater(currentNode, node)
    }
    return returnVal
  }
}

module.exports = { Tree, TreeNode };
