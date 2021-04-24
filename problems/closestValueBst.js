function findClosestValueInBst(tree, target) {
	let closest = tree.value,
			curr = tree;
	while(curr !== null){
		if(Math.abs(curr.value - target) === 0) return curr.value;
		if(Math.abs(curr.value - target) < Math.abs(closest - target)){
			closest = curr.value;
		}
			if(curr.value > target){
				curr = curr.left;
		}else if(curr.value < target){
				curr = curr.right;
			} else break;
	}
	
	return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
