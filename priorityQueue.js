// max heap review
//[60,55,37,30,25,29] 80
//index of child 2n + 1 and  2n + 2
//index of parent Math.floor((n-1)/2)

class MaxHeap{
    constructor(){
        this.values = [60,55,37,30,25,29];
    }

    insert(value){
        const array = this.values;
        array.push(value);
        let childIdx = array.length - 1; //6
        const child = array[childIdx]; //80
        while(childIdx > 0){ //6
            let parentIdx = Math.floor((childIdx - 1) / 2); // 2 [60,55,37,30,25,29,80]
            let parent = array[parentIdx]; //37
            if(parent > child) break;  //37 > 80
            array[childIdx] = parent;  // 80 = 37  [60,55,37,30,25,29,37]
            array[parentIdx] = child; //37 = 80 [60,55,80,30,25,29,37]
            childIdx = parentIdx; // 6 = 2
        }
        return array;
    }
    
}

// let heaper = new MaxHeap();
// console.log(heaper.insert(80));


class MaximumHeap{
    constructor(){
        this.value = [60,55,37,30,25,29];
    }

    insert(value){
        const array = this.value; // [60,55,37,30,25,29]
        array.push(value); // [60,55,37,30,25,29,80]
        let childIdx = array.length - 1; // 6
        let child = array[childIdx]; // 80
        while(childIdx > 0){
            let parentIdx = Math.floor((childIdx - 1) / 2); // 2
            let parent = array[parentIdx]; //37
            if(child < parent) break;
                array[parentIdx] = child;
                array[childIdx] = parent;
                childIdx = parentIdx;
        }
        return array;
    }

    remove(){
        const values = this.value; // [29,55,37,30,25]
        let idx = 0;
        const length = values.length;
        const elem =
    }
}

let heap = new MaximumHeap();
console.log(heap.insert(80));


//Priority Queue

class Node{
    constructor(val, priority){
        this.values = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(){

    }
    dequeue(){

    }
}

let queue = new PriorityQueue();