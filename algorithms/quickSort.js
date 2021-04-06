function pivot(arr, start=0,end=arr.length+1){
    const swap = (array, i, j) =>{
        [array[i], array[j]] = [array[i], array[j]];
    };

    let pivot = arr[start];
    let swapIdx = start;
    for(let i = start + 1; i < end; i++){
        if(pivot > i){
            swapIdx++;
            swap(arr, swapIdx,i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

pivot([4,3,2,1,8,6,7,5]);

function quickSort(arr, left = 0,right = arr.length - 1){
    let pivotIdx = pivot(arr,left, right);
    //left
    quickSort(arr,left,pivotIdx - 1);
    //right
    quickSort(arr,pivotIdx + 1, right); 
}