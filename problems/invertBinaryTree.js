const { findSourceMap } = require("module");

  
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
 
    console.log(tree)
    const bFirstS = (root) =>{
        const queue = [],
              result = [];
        queue.push(root);
        let current;
        while (queue.length){
            current = queue.shift();
            result.push(current.value)
            if(current.left) queue.push(current.left);
            if(current.left) queue.push(current.right);
        }return result;
    }

    // console.log(bFirstS(tree))



// console.log(tree)

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
  // invertBinaryTree(tree)
//   console.log(bFirstS(tree))

// function findSuccessor(bTree, node) {
// 	const values = dfs(bTree);
  
// 	for(let i = 0; i < values.length; i++){
// 		if( values[i].value !== node) continue;
// 		if(i === values.length - 1) return null;
// 		return values[i + 1];
// 	} 
// }
// function dfs(node, nodeValues = []){
  
//   if(node.left)dfs(node.left,  nodeValues);
//   nodeValues.push(node);
//   if(node.right)dfs(node.right,  nodeValues);
//   return nodeValues;
// }
// dfs(tree)
// console.log(findSuccessor(tree, 5))


function findSuccessor(tree, node) {
	const nodeValues = [];
	
	function dfs(node){
		if(node.left)dfs(node.left,  nodeValues);
		nodeValues.push(node);
		if(node.right)dfs(node.right ,  nodeValues);
	}
	dfs(tree);
	for(let i = 0; i < nodeValues.length; i++){
		const curr = nodeValues[i];
		if( curr !== node) continue;
		
		if(i === values.length - 1) return null;
		
		return values[i + 1];
	} 
}
findSuccessor(tree)