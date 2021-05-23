const maxsub = (arr, num) =>{
    let max = 0;
    let tempMax = 0;
    if(arr.length < num) return false;
    for(let idx = 0; idx < num; idx++){
        max += arr[idx];
    }
    tempMax = max;
    for(let idx = num; idx < arr.length; idx++){
        tempMax = tempMax - arr[idx - num] + arr[idx];
        max = Math.max(max, tempMax);
    }
    return max;
}

console.log(maxsub([3,6,9,2,4,1,6],5));

const array = [3,6,9,2,4,1,6];
array.splice(3,1);
console.log(array)

