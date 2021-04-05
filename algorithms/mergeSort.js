// starts by dividing array into many arrays until 1 element is in each array then merges 2 sorted arrays

//merge 2 sorted arrays
//iterate through the array 
//merge2SortedArrays([1,3,5,7],[2,4,6,8])
//naive solution

function merge2SortedArrays(arr1,arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
       if(arr1[i] < arr2[j]){
        result.push(arr1[i]);
        i++;
       }else{
          result.push(arr2[j]);
          j++; 
       }
    }
    
    while(i < arr1.length){
        result.push(arr1[i])
        i++;
    }

     while(j < arr2.length){
        result.push(arr2[j])
        j++;
    }
    return result;
}