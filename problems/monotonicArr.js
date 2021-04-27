const arr = [1,2,3,4,5]; // true
const arr1 = [1,2,-3,4,5]; //false
const arr2 = [1,-2,-3,-4,-5]; //true

function isMonotonic(array) {
    let curr = 0;
      const length = array.length
      while(array[curr] === array[curr + 1] && curr < length) curr++;
      if(array[curr] > array[curr + 1]){
          while(curr < length){
              if(array[curr] < array[curr + 1]) return false;
              curr++;
          }
      }
      if(array[curr] < array[curr + 1]){
          while(curr < length){
              if(array[curr] > array[curr + 1]) return false;
              curr++;
          }
      } return true;
  }

console.log(isMonotonic(arr));
  