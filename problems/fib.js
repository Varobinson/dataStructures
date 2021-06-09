//fib recursive
//O(2^n)
// O(n)

function fib(n){
//base 
if(n < 2) return n;
return fib(n - 1) + fib(n - 2);    
}

//iterative 
//o(n) time
//o(1) space

function fibbo(n){
// destructuring
let [a,b] = [1,1]; //o(1) o(1)
while(n > 2){ //o(n)
    [a,b] = [b, b+a]; //o(1)
    n--; //o(1)
    } 
    return a; //o(1)
}
console.log(fibbo(5))

