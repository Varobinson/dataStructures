//Pre-order


function PreOrder(root){
    let data = [],
        current = root;
    
    function traverse(node){
        data.push(node)
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        }

    traverse(current);
    return data;
}
const arr = [1,2,3];
const copy = [...arr]
console.log(copy)

//Post order

function postOrder(root){
    let data = [],
        current = root;
    
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node)
    }
    traverse(current);
    return data;
}
//es6

// const traverse = (node , data) =>{
//     if(node.left) traverse(node.left);
//     if(node.right) traverse(node.right);
//     data.push(node);
//     return data;
// }

// const PreOrder = (root) =>{
//     const data = [],
//         current = root;
//     const traversedData = traverse(current, data);
//     return traversedData;
// }

// IN Order

function inOrder(root){
    const data = [],
        current = root;
    function traverse(node){
        if(node.left) traverse(node.left);
        data.push(node);
        if(node.right) traverse(node.right);
    }
    traverse(current);
    return data;
}
