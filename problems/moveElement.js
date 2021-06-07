const arr = [1,3,4]
const newArr = []

newArr.push(arr.splice(1,1)[0]);
console.log(newArr)
console.log(arr)

function moveElementToEnd(array, toMove) {
      let nums = [];
      for(let idx = 0; idx < array.length; idx++){
          if(array[idx] === toMove) {
              nums.push(array.splice(idx,1)[0]);
          }
      }return [...array,...nums];  
  }
  const array =[2,1,2,2,2,3,4,2]
  console.log(1 == '1')
  console.log(moveElementToEnd([2,1,2,2,2,3,4,2], 2))
  