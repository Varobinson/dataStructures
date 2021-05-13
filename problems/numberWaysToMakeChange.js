function fib(n){
    if(n < 3) return 1;
    let count = 1,
        prev = 0,
        curr = 1,
        total = 0;
    while (count < n){
        count++;
        total = prev + curr;
        prev = curr;
        curr = total;
    }
    return total;
}

console.log(fib(14))


function nacci(n){
    let prev = 0,
        curr = 1,
        total = 0;
    if(n <= 2) return 1;
    for(let i = 2; i <= n ;i++){
        total = prev + curr;
        prev = curr;
        curr = total;
    }
    return total;
}
console.log(nacci(14))

function countZeroes(arr){
    let curr = arr.length - 1, //5
      counter = 0;
    if (arr[curr] === 1) return 0;
    while( arr[curr] !== 1 && curr >= 0){
        curr--;
        counter++;
    } return counter;
  }
  console.log(countZeroes([1,1,1,1,0,0]))