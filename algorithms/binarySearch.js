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

let nums = [1,2,3,4,5,6,7,8]; 

const bSearch = (arr,val) => {
    let start = 0;
    let end = arr.length - 1; //7
    let mid = Math.floor((start + end) / 2);//3
    while(val !== arr[mid] && start <= end){
        if(val > arr[mid]){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    if(val === arr[mid]){
        return mid;
    }
    return -1;
}

console.log(bSearch(nums,2));


//recursive version

const recursiveBinary = (arr, val) =>{
    let start = 0;
    let end = arr.length - 1; //7
    let mid = Math.floor((start + end) / 2);//3
    
}

console.log(recursiveBinary(nums, 2))