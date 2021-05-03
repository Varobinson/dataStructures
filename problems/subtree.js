// function bfs(root){
//     const queue = [],
//           result = []
//     let curr = root;
//     queue.push(curr);
//     while(queue.length){
//         curr = queue.shift();
//         if(curr.left) result.push(curr.left.val);
//         if(curr.right) result.push(curr.right.val);
//     }return result;
// }
// var isSubtree = function(s, t) {
//     const tree = bfs(t),
//           subTree = bfs(s);
          
//     if(tree[tree.length - 1] !== subTree[subTree - 1]) return false;
//     for(let i = tree.length - 1; i >= 0; i--){
//         if(subTree.length === 0) return true;
//         let currSubIdx = subTree.length - 1;
//         let currSub = subTree[currSubIdx];
//         if(tree[i] === currSub) subTree.pop();
        
        
//     }return false;
// };


var isSubtree = function(s, t) {
    let stack = [s];    
    while (stack.length > 0) {
        let node = stack.pop();
        if (isSubtreeEqual(node, t)) {
            return true;
        }
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    
    return false;
};

function isSubtreeEqual(root1, root2) {
    if (root1 === null && root2 === null) {
        return true;
    } else if (root1 === null || root2 === null) {
        return false;
    } else {
        return root1.val === root2.val 
        && isSubtreeEqual(root1.left, root2.left) 
        && isSubtreeEqual(root1.right, root2.right);
    }
}