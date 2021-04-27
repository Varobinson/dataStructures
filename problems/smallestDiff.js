let arr =[1,2]
function add(arr){
    let num1 = arr[0] * 2 
    let num2 = arr[1] * 2 
return [num1,num2]
}

console.log(add(arr))

//naive solution
const smallestDifference = (arrayOne, arrayTwo)=> {
    let min = Infinity,
            num1,
            num2;
       for(let i = 0; i < arrayOne.length; i++){
           for(let j = 0; j < arrayTwo.length; j++){
               if(Math.abs(arrayOne[i] - arrayTwo[j]) < min){
                   min = Math.abs(arrayOne[i] - arrayTwo[j]);
                   [num1,num2] = [arrayOne[i], arrayTwo[j]]
               }
           }
       }return [num1,num2];
       
   }
   