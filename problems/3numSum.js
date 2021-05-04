const arr = [12,3,1,2,-6,5,-8,6];

const threeSum = (array, target)=>{
    const hash = {}, 
        result = []; 
    //populates hash with array values
    for(let num of array){ 
        hash[num] = true; 
    }
    //iterates through array for each value
    for(let i = 0; i < array.length; i++){ 
            let final = [],
                j = i + 1, 
                sum = array[i] + array[j]; 
            if(hash[target - sum]){ 
                final.push(arr[i], arr[j], target - sum); 
                final.sort((a,b) => a - b); 
                result.push(final); 
            }
    } return result.sort((a,b) => a[0] - b[0]);
}
    

console.log(threeSum(arr, 0))