// Implementing Heap

class BH{
    constructor(){
        this.values = [40,32,28,30,22,14,9];
    }

    add(val){
        const values = this.values;
        values.push(val);
        let newValueIdx = values.length - 1,
        newValue = values[newValueIdx],
        parent,
        parentIdx;
//[40,32,28,30,22,14,9,31]
        while(newValueIdx > 0){
            parentIdx = Math.floor((newValueIdx - 1) / 2);
            parent = values[parentIdx];
            if(parent > newValue) break;
            values[parentIdx] = newValue;
            values[newValueIdx] = parent;
            newValueIdx = parentIdx;
        }
    }

    remove(){

    }
}

const heap = new BH();
heap.add(31);
console.log(heap);


function twoSum(arr, sum){
    const final = [];
    const obj = {};
    for(let num of arr){
        let numNeeded = sum - num;
        if(obj[numNeeded]){
            final.push(numNeeded, num);
            return final;
        }
        obj[num] = true;
    }
    return [];
}

console.log(twoSum([1,2,3,4,5], 7));

function validSub(arr, sub){
    const obj = {};
    for(let i = 0; i < arr.length; i++){
        obj[arr[i]] = i + 1;
    }
    for(let i = 0; i < sub.length;i++){
        let prev = sub[i - 1];
        if(!obj[sub[i]]){
            return false;
        }
        
        if(obj[sub[i]] + 1 < obj[prev]){
            return false;
        }
    }
    return true;
}

(validSub([3,1,6,9,2], [3,9]));


// // obj{
// 3:1
// 1:2
// 6:3
// 9:4
// 2:5
// // }

console.log(0 == false)

function sortedSquaredArray(array) {

	let arr =[];
	for(const num of array){
		arr.push(num**2);
	}
	arr.sort((a,b)=> a - b);
	return arr;
}

console.log(sortedSquaredArray([-4,-3,1,2]))