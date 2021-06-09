
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
const findUno = (trix) =>{
    const rows = matrix.length;
    const cols = matrix[0].length;
    for(let col = 0; col < cols; col++){
        for(let row = 0; row < rows; row++){
            if(trix[row][col] === 1) return col; 
        }
    }return -1
}

let land = '1'
console.log('1' === land)

// //BSearch
// //O(mlogn)
// const findFirst = (arr) =>{
//     if(!arr) return -1;
//     let min = Infinity;
//     for(row of arr){
//         min = Math.min(bSearch(row), min);
//     }return min;
// }

// const bSearch = (row) =>{
//     let start = 0;
//     let end = row.length - 1;

//     while(start < end){
//         let mid = Math.floor((start + end)/2);
//         if(row[start] === 1) return 0;
//         if(row[mid] === 1 && row[mid - 1] === 0){
//             return mid;
//         }
//         else if(row[mid] === 1) end = mid;
//         else if(row[mid] === 0) start = mid;
//     }
// }

// console.log(findFirst(matrix));

// const array = [1,2,3]

// function sortedSquaredArray(array) {
// 	const results = [];
//   for(let num of array){
// 		results.push(num*num);
// 	}
//   return results.sort((a,b) =>a-b);
// }

// console.log(sortedSquaredArray(array))


// function binarySearch(arr, num){
//     let start = 0;
//     let end = arr.length - 1;
//     let mid = Math.floor((start + end) / 2);
//     if(arr[end] === num) return end;
//     if(arr[start] === num) return start;
//     while (start < end && arr[mid] !== num){
//          mid = Math.floor((start + end) / 2);
       
//         if(arr[mid] > num) end = mid - 1 ;
//         else start = mid + 1;
//     }return arr[mid] === num ? mid: -1 ;
//   }


//   const trix = [
//     [0,0,0,1,1],
//     [0,0,0,0,1],
//     [0,0,0,0,1]
// ]






// /*
// trix[row][col]
// trix [2][2]
// return col = 2

// O(n*m)
// cols = trix[0].length
// rows = trix.length
// for loop through col
//     for loop through rows
//     if trix[row][col] equals 1 return col
// return -1

// minValue Infinity
// for vals in row 
// minValue  math min min value and call binary helper row //


// binary helper arr
// start 0
// end arr length
// if start is 1 return 0
// while start less or equal to end
//     mid equals math floor start plus end 
//     if mid equals 1 and mid -1 equals 0 return mid
//     if mid is 0 start equals mid
//     else end equals mid 
// */

// const findTheOne = (matrix) =>{
//     let min = Infinity;
//     for(const row of matrix){
//         min = Math.min(min,searchHelper(row));
//     }return min;
// }
// const searchHelper = (row) =>{
//     let start = 0;
//     let end = row.length - 1;
//     if(row[start] === 1)return 0;
//     while(start <= end){
//         let mid = Math.floor((start + end) / 2);
//         if(row[mid] === 1 && row[mid - 1] === 0) return mid;
//         else if(row[mid] === 0) start = mid;
//         else end = mid;
//     }return Infinity;
// }

// console.log(findTheOne(trix))


