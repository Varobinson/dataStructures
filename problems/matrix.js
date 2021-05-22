
const matrix = [
    [0,0,0,1,1],
    [0,0,0,1,1],
    [0,0,1,1,1]
]

//O(n*m)

//matrix[row][col]
function findOne(arr){
    const cols = arr[0].length; //5
    const rows = arr.length; // 3

    for(let col = 0; col < cols; col++){
        for(let row = 0; row < rows; row++){
            if(arr[row][col] === 1) return col;
        }
    } return -1;
}
console.log(findOne(matrix));

//BSearch
//O(mlogn)
const findFirst = (arr) =>{
    if(!arr) return -1;
    let min = Infinity;
    for(row of arr){
        min = Math.min(bSearch(row), min);
    }return min;
}

const bSearch = (row) =>{
    let start = 0;
    let end = row.length;

    while(start < end){
        let mid = Math.floor((start + end)/2);
        if(row[start] === 1) return 0;
        if(row[mid] === 1 && row[mid - 1] === 0){
            return mid;
        }
        else if(row[mid] === 1) end = mid;
        else if(row[mid] === 0) start = mid;
    }
}

console.log(findFirst(matrix));