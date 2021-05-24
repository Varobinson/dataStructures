const array = [3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4];

function subSum(arr){
    let max = -Infinity;

    for(let i = 0; i < arr.length; i++){
        let total;
        for (let j = 0; i < arr.length; j++){
            if(total > max) max = total;
            total += arr[j];
            
        }
    }return max;
}

function kadanesAlgorithm(array) {
    let currentMax = array[0], 
              overallMax = array[0];
      for(let i = 1 ; i < array.length; i++){
              const num = array[i];
              currentMax = Math.max(num, currentMax + num);
              overallMax = Math.max(overallMax, currentMax);
      }
      return overallMax;
  }

  console.log(2%26)