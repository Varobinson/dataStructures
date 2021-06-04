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

  function getNthFib(n) {
    let [a,b] = [0,1];
    while(n > 1){
      [a,b] = [b, a+b];
      n--;
    }
    return a;
  }


  function searchMatrix(matrix, target){
    let row = 0;
    let col = matrix[0].length -1;
    while (row < matrix.length && col >= 0){
      if(matrix[row][col] > target) col--;
      else if(matrix[row][col] < target) row++;
      else return [row,col];
    }
    return [-1,-1];
  }

  