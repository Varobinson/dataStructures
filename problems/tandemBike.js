const { SSL_OP_NO_TLSv1_2 } = require("constants");

function tandemBicycle(red, blue, fastest) {
	let sum = 0;
	red.sort((a,b) => a-b);
	blue.sort((a,b) => a-b);
    
    console.log(blue)
	
	if(!fastest) reverseArray(red);
    console.log(red)
	for(let i = 0; i < red.length; i++){
		sum += Math.max(red[i], blue[blue.length - i - 1]);
	}
  return sum;
}
function reverseArray(arr){
    let start = 0;
    let end = arr.length -1;
    while(start < end){
         [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;

    }return arr;
}

console.log(tandemBicycle([2,4],[1,3], false))