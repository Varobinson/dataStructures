// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;

//     }
// }

// // let first = new Node('hi')
// // first.next = new Node('there') 
// // first.next.next = new Node('how') 
// // first.next.next.next = new Node('are') 
// // first.next.next.next.next = new Node('you') 

// // console.log(first)

// class SinglyLinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.length = 0
//     }
//     push(val){
//         let newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         } 
//         this.length++;
//         return this;
//     }
//     pop(){
//         if (this.length ==  0){
//             return undefined;
//         }else{
//             while(this.tail !== null){

//             }
//         }
//     }
// }

// let list = new SinglyLinkedList()
// // list.push('hello')
// // list.push('goodbye')

// console.log(list.push('hello'))
// console.log(list.push('hello'))


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class singleList {
    constructor(){
        this.tail = null;
        this.head = null;
        this.length = 0;
    }
    push(val){
        let input = new Node(val);
        if(!this.head){
            this.head = input;
            this.tail = this.head;
        } else {
            this.tail.next = input;
            this.tail = input;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let pre = current;
        while(current.next){
            pre = current;
            current = current.next;
        }
            this.tail = pre;
            this.tail.next = null
            this.length--;
            if(this.length == 0){
                this.head =null;
                this.tail =null;
            }
            return current;
    }
    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if(this.length == 0){
            this.tail =null;
        }
        return oldHead;
    }
    unshift(val){
        let input = new Node(val);
        let currentHead = this.head;
        if(!this.head){
            this.head = input;
            this.tail = this.head;
        } 
        this.head = input;
        input.next = currentHead;
        this.length++;
        return this;
    }
    get(value){
        if(value < 0 || value >= this.length) return null;
        let counter = 0
        let current = this.head;
        while(counter !== value){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(value, input){
        let node = this.get(value);
        if(node){
            node.val = input;
            return true;
        }
        return false;
    }
    insert(value, input){
        if(value < 0 || value > this.length) return false;
        if(value === this.length) return !!this.push(input); 
        if(value === 0) return !!this.unshift(input);

            let newNode = new Node(input) 
            let firstNode = this.get(value - 1);
            let temp = firstNode.next
            firstNode.next = newNode;
            newNode.next = temp
            this.length++;
            return true;

    }
    remove(value){
        if(value < 0 || value >= this.length) return undefined;
        if(value === 0) return this.shift();
        if(value === this.length - 1) return this.pop();
        
        let preNode = this.get(value - 1);
        let removed = preNode.next;
        preNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let pre = null;
        let next;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }
    }
    print(){
        let arr = [];
        let current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}
let newList = new singleList();
// newList.push('stuf');
// newList.push('stoop');
// newList.push('stuf');  
// newList.push('stu');
// newList.push('store');
// newList.pop();
// newList.unshift('val');
// newList.set(2,'thing');
// newList.get(2);
// newList.set(2,'thing');
// newList.get(2);
// console.log(newList);
// newList.reverse()
// newList.print();

var replaceDots = function(str) {
    let sent = str.split('');
    for(let i = 0; i < sent.length; i++){
      if(sent[i] === '.'){
        sent[i] = '-';
      }
    }
    return sent.join('')
  }
  console.log(replaceDots("the.bad cat. ate .the donuts."))