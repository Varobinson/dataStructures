class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = first;
        this.last = last;
        this.size = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        } else{
            let oldFirst = this.first;
            this.first = newNode;
            newNode.next = oldFirst.next;
        }
        return this.size++;

    }
}

let firstStack = new Stack();
firstStack.push(2)
firstStack.push(2)
firstStack.push(2)
