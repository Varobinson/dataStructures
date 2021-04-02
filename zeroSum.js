function zeroSum(arr){
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
        let total = arr[i] + arr[j];
        if(total === 0) {
            return [arr[i],arr[j]]
            }
        else if(total > 0){
            j--;
        }else{
            i++;
        }      
    }
}




// zeroSum([-3,-2,-1,0,1,2,3]);
// zeroSum([1,2,3]);
// zeroSum([-2,0,1,3]);