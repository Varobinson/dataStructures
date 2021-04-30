console.log([1,2,3] === [1,2,3])

const sameTree = (q,p)=>{
    if(!q && !p) return true;
    if(!q || !p || p.val !== q.val) return false;
    return sameTree(q.left, p.left) && (q.right, p.right); 
};