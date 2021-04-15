//max binary heap

class MaxBinaryHeap{
    constructor(){
        this.values = [55,39,41,18,27,12,33];
    }

    insert(value){
        const arr = this.values;
        arr.push(value);
        let idx = arr.length - 1;
        const element = arr[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) /2);
            let parent = arr[parentIdx]
            if(element <= parent) break;
            arr[parentIdx] = element;
            arr[idx] = parent;
            idx = parentIdx; 
        }
        return arr;
    }

    swap(){
        let arr = this.values;
        let currIdx = 0; 
        const length = arr.length;
        const curr = arr[0]

        while(true){
            let child1Idx = (2 * currIdx) + 1;
            let child2Idx = (2 * currIdx) + 2;
            let child1 ,child2; 
            let swap = null;

            if( child1Idx < length){
                child1 = arr[child1Idx];
                if(child1 > curr){
                    swap = child1Idx;
                }
            } 
            if(child2Idx < length){
                child2 = arr[child2Idx];
                if(
                    (swap === null && child2 > curr) || 
                    (swap !== null && child2 > child1)){
                    swap = child2Idx;
                }
            }
            if(swap === null) break;
            arr[currIdx] = arr[swap];
            arr[swap] = curr;
            currIdx = swap;
       }
    }

    extractMax(){
        const arr = this.values;
        const maxVal = arr[0];
        const lastVal = arr.pop();
        arr[0] = lastVal;
        this.swap();
        return maxVal;
    }

    
}

let maxHeap = new MaxBinaryHeap();

console.log(maxHeap.extractMax(),maxHeap.values);


// min binary heap

class MinBinaryHeap{
    constructor(){
        this.values = [5,10,14,18,22,20];
    }
                       //[5,10,14,18,22,20,1] 
                       //      pi          ci
    insert(value){
        const arr = this.values;
        arr.push(value);
        let childIdx = arr.length - 1; //6
        const child = arr[childIdx];// 1
        while(childIdx > 0){
            let parentIdx = Math.floor((childIdx - 1) / 2); //2
            let parent = arr[parentIdx]; //14
            if(child > parent) break; // false
            arr[childIdx] = parent; //[5,10,14,18,22,20,14]
            arr[parentIdx] = child; //[5,10,1,18,22,20,14]
            childIdx = parentIdx; // childIdx = 2
        }
        return arr;
    }
}

// let minHeap = new MinBinaryHeap();

// console.log(minHeap.insert(1));

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
