class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(value){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        let current = this.root;
        if(current === null){
            current = newNode;
            return this;
        }
        while(true){
            if(value === current.value) return undefined;
            if(current.value < value){
                if(current.right === null){
                    current.right = newNode;
                }
                current = current.right;
                return this;
            }
            if(current.value > value){
                if(current.left === null){
                    current.left = newNode;
                }
                current = current.left;
                return this;
            }
        }
    }
}
//         tree
//          10
//     8        15
//   4   14   12  20


let tree = new BinarySearchTree();