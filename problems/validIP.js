const arr = [4,6,10,14,16,11];
const limit = 22;

const findMatch = (array,match) =>{
    const map = new Map();
    for(let i = 0; i < array.length;i++){
        map.set(match - arr[i], i);
        if(map.has(arr[i])) return [i, map.get(arr[i])];
    }
    return [];
}

console.log(findMatch(arr, limit))