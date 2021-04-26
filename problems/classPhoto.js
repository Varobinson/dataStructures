// how many pairs if 4 are the same?
// 5

// 1,2,3,4,5 => 15
// sum of 1..to N
// n(n+1)/2

// 1 => 0
// 2 => 1
// 3 => 3
// 4 => 6
// 5 => 10
// 6 => 15
// sum of 1...(N-1)

// n(n-1)/2

// n(n+1)/2=> (n^2)/2 + n/2

function goodPairs(arr){
  const map = {};
  let num = 0;
  for(let i = 0; i < arr.length; i++){
    if(map[arr[i]]){
       map[arr[i]]++;
       } else map[arr[i]] = 1;
  }
  for(let value in map){
    if(value === 2) num++;
    if(value > 2){
      num += (value*(value - 1))/2;
    }
  }return num;
}
