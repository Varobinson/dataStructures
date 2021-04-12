// const breath = (root) =>{
//     let queue = [],
//         result = []
//         current = root;
//         queue.push(root);

//     while(queue.length){
//         current = queue.shift();
//         result.push(current);
//         if(current.left) queue.push(current.left);
//         if(current.right) queue.push(current.right);
//     }
//     return result;

// }

const bFirstS = (root) =>{
    let queue = [],
        result = []
        current = root;
    queue.push(root);
    
    while(queue.length){
        current = queue.shift();
        result.push(current);
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return result;
}