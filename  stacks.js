

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else{
            let oldFirst = this.first;
            this.first = newNode;
            this.first.next = oldFirst;
        }
        return ++this.size;

    }
    pop(){
        if(!this.first) return null;
        let popped = this.first;
        if(this.first === this.last){
            this.last = null;
            }
         this.first = this.first.next;
         this.size--;       
         return popped.value;
    }
}


// let firstStack = new Stack();
// firstStack.push(2)
// firstStack.push(3)
// firstStack.push(5)
// firstStack.pop()

//output: 5

