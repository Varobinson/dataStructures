class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  const tree = new BST(15);
 tree.left = new BST(5);
 tree.left.left = new BST(2);
 tree.left.left.left = new BST(1);
 tree.left.left.right = new BST(3);
 tree.left.right = new BST(5);
 tree.right = new BST(20);
 tree.right.left = new BST(17);
 tree.right.right = new BST(22);
  const k = 3;
  
  




function findKthLargestValueInBst(tree, k) {
    const array =[];
    function traverse(node){
        if(node.left) traverse(node.left);
        array.push(node.value);
        if(node.right) traverse(node.right);
    }
 	traverse(tree);	
  return array[array.length - k];
}

console.log(findKthLargestValueInBst(tree, k));

