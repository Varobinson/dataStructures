
  
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(values, i = 0) {
      if (i >= values.length) return;
      const queue = [this];
      while (queue.length > 0) {
        let current = queue.shift();
        if (current.left === null) {
          current.left = new BinaryTree(values[i]);
          break;
        }
        queue.push(current.left);
        if (current.right === null) {
          current.right = new BinaryTree(values[i]);
          break;
        }
        queue.push(current.right);
      }
      this.insert(values, i + 1);
      return this;
    }
  
    invertedInsert(values, i = 0) {
      if (i >= values.length) return;
      const queue = [this];
      while (queue.length > 0) {
        let current = queue.shift();
        if (current.right === null) {
          current.right = new BinaryTree(values[i]);
          break;
        }
        queue.push(current.right);
        if (current.left === null) {
          current.left = new BinaryTree(values[i]);
          break;
        }
        queue.push(current.left);
      }
      this.invertedInsert(values, i + 1);
      return this;
    }
  }
  
  
    const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9]);
    const invertedTree = new BinaryTree(1).invertedInsert([2, 3, 4, 5, 6, 7, 8, 9]);
 
    const bFirstS = (root) =>{
        let queue = [],
            result = []
            current = root;
        queue.push(root);
        
        while(queue.length){
            current = queue.shift();
            result.push(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return result;
    }

    console.log(bFirstS(tree))



console.log(tree)

  function invertBinaryTree(tree) {
    const current = tree;
    function traverseSwap(node){
        if(node.left && node.right){
            [node.left, node.right] = [node.right, node.left];
        } 
    if(node.left) traverseSwap(node.left);
    if(node.right) traverseSwap(node.right);
  }
  traverseSwap(current);
  return current;
  }
  invertBinaryTree(tree)
  console.log(bFirstS(tree))