// pick the sub array in an array with the the highest value
// adding consecutive numbers
// Input: slidingWindow([8,6,3,2,5,9,1,6,0], 4)
//                               ^+^+^+^
//output: 21

// does array have negative values?
//can num be negative?
//will i encounter empty arrays?
//will num = 0

//handle empty arr
//  if arr is empty return undefined
//max variable = -infinity;
//for loop while i < arr length - num + 1
//temp = 0
//for loop j =0 j<num
// temp += arr[i + J]
//if temp > max
//max = temp
//return max

// Naive solution 0(n^2) 0(1)

// function slidingWindow(arr, num){
//     if(arr.length < num){
//         return null;
//     }
//     let max = -Infinity; 
//     for(let i = 0; i < arr.length - num + 1; i++){
//         let temp = 0;
//         for(let j = 0; j < num; j++){
//             temp += arr[i + j];
//         }
//         if(temp > max){
//             max = temp;
//         }

//     }
//     return max
// }

slidingWindow([8,6,3,2,5,9,1,6,0], 4) //21
slidingWindow([3,6,3,7,5,0], 2) //12
slidingWindow([], 4)// undefined
slidingWindow([8,-6,3,2,5,-9,1,6,0], 3) //10



//handle null array
//set max 0
// set temp 0

//instead of adding all numbers we're going to sub tract 
//first num in arr and add the net
//
//for loop i = 0 i less num I++
// max += arr[i]
//temp = max
// for loop i = num i < arr.length i++
//temp  = temp - arr[i - num] + arr[i]
//if max < temp 
//max = temp
//return max
// optimal solution 0(n) 0(1)

function SlidingWindow(arr,num){
    if(arr.length < num){
        return null;
    }
    let max = 0;
    let temp = 0;
    for(let i = 0; i < num; i++){
        max += arr[i];
    }
    temp = max;
    for(let i = num; i < arr.length; i++){
        temp = temp - arr[i - num] + arr[i];
        if(max < temp){  // max = Math.max(max, temp);
            max = temp;
        }
    }
    return max;
}

slidingWindow([8,6,3,2,5,9,1,6,0], 4) //21
slidingWindow([3,6,3,7,5,0], 2) //12
slidingWindow([], 4)// undefined
slidingWindow([8,-6,3,2,5,-9,1,6,0], 3) //10