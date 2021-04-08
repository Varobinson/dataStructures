// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }

//     insert(value){
//         let newNode = new Node(value);
//         let current = this.root;
//         if(!current){
//             current = newNode;
//             return this;
//         }
//         while(true){
//             if(value === current.value) return undefined;
//             if(current.value < value){
//                 if(current.right === null){
//                     current.right = newNode;
//                     return this;
//                 }
//                 current = current.right;
//             }
//             if(current.value > value){
//                 if(current.left === null){
//                     current.left = newNode;
//                     return this;
//                 }
//                 current = current.left; 
//             }
//         }
//     }

//     find(value){
//         let current = this.root;
//         let found = false;
//         if(!current) return false;
//         while(current && !found){
//             if(current.value > value){
//                 current = current.left;
//             }
//            else if(current.value < value){
//                 current = current.right;
//             }
//             else{
//                  return true;
//             }
//         }
//         return false;
//     }
// }
// //         tree
// //          10
// //     8        15
// //   4   14   12  20


// let tree = new BinarySearchTree();

//review

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value)
        let current = this.root;
        if(!this.root){
            this.root = newNode;
            return this;
        }
        while(true){
            if(value === current.value) return undefined;
            if(current.value < value){
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right; 
            }else{
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left; 
            }
        }
    }
    find(value){
        if(!this.root) return undefined;
        let current = this.root;
        while(current.value !== value){
            if(current.value > value){
                if(current.left === null){
                    return false;
                }
                current = current.left;
            }else{
                if(current.right === null){
                    return false;
                }
                current = current.right;
            }
        }
        return true;
    }
}

let newTree = new BST();

newTree.insert(5);
newTree.insert(2);
newTree.insert(13);
newTree.insert(11);
console.log(newTree.find(5));

