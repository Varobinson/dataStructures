class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  
    const root = new BST(10);
    root.left = new BST(5);
    root.left.left = new BST(2);
    root.left.left.left = new BST(1);
    root.left.right = new BST(5);
    root.right = new BST(15);
    root.right.left = new BST(13);
    root.right.left.right = new BST(14);
    root.right.right = new BST(10);
  
  
  


//VALID BST

const BFS = (root) =>{
const queue = [],
    results = [];
let current = root;
    queue.push(root);
while(queue.length){
    current = queue.shift()
    results.push(current.value);
	if(current.left){
		queue.push(current.left);
    }
    if(current.right){
        queue.push(current.right);
    }
    } return results;
}

const validBST = (tree) => {
if(!tree) return null;
const values = BFS(tree);
for(let i = 1 ; i < values.length; i++){
	let parent = Math.floor(( i- 1) / 2),
	    even = false;
	i % 2 === 0 ? even = true : even = false;
	if(!even && values[i] > values[parent]) return false;
	else if(even && values[i] < values[parent]) return false;
    }
	return true;
}
console.log(BFS(root));

