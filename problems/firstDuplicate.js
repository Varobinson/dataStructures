function firstDuplicateValue(array) {
    for(let value of array){
          let abs = Math.abs(value);
          if(array[abs - 1] < 0) return abs;
          array[abs - 1] *= -1;
      }
    return -1;
  }
  