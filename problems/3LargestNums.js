const arr = [1,2,3,4,5,6,7]

function findThreeLargestNumbers(array) {
    const results = [null,null,null];
      for (let num of array){
        console.log(results)
          if(num > results[2]){
            results[0] = results[1];
            results[1] = results[2];
            results[2] = num;
          }else if(num > results[1]){
            results[0] = results[1];
            results[1] = num;
          }else if(num > results[0]){
            results[0] = num;
          }
      }return results;
  }
  console.log(findThreeLargestNumbers(arr))