function heightBalancedBinaryTree(tree) {
    const queue = [];
        let node = tree;
        queue.push(node);
    while(queue.length){
        node = queue.shift();
        if(node.left && node.right){
            if(Math.abs(node.left.value - node.right.value) > 1){
    return false;
    }
    }
        if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
    
    }
      return true;
    }
    