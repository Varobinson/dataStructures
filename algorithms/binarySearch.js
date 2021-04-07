// const numbers = [1,2,3,4,5,6,7,8];

// const binarySearch = (arr, val) => {
//     let left = 0;
//     let right = arr.length-1;
//     let mid = Math.floor((left + right) / 2);
//     while(arr[mid] !== val && left <= right){
//         if(val > arr[mid]){
//             left = mid + 1;
//         }else{
//             right = mid - 1;
//         }
//         mid = Math.floor((left + right) / 2);
//     }
//     if(arr[mid] === val){
//         return mid;
//     }
//     return -1;
// }

// console.log(binarySearch(numbers,68))

// binary search es6 time 0(logn) space 0(1) better than recursion

let nums = [1,2,3,4,5,6,7,8]; 

const bSearch = (arr,val) => {
    let start = 0;
    let end = arr.length - 1; //7
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(val === arr[mid]) return mid;
        if(val > arr[mid]){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1;
}

console.log(bSearch(nums,7));


// recursive version time 0(logn) space 0(logn) counts callstack
// const recursiveBinaryHelper = (arr,val,start,end) =>{
//    if(start > end) return -1;
//     let mid = Math.floor((start + end) / 2);
//     if(val === arr[mid]) return mid;
//     if(val > arr[mid]){
//         return recursiveBinaryHelper(arr,val,mid + 1,right);
//     }else{
//         return recursiveBinaryHelper(arr,val,start,mid - 1);
//     }
// }

// const recursiveBinary = (arr, val) =>{
//     return recursiveBinaryHelper(arr,val,0,arr.length - 1);
// }

// console.log(recursiveBinary(nums, 2));



