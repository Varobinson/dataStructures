var climbStairs = function(n) {
    let stairs = new Array(n + 1);
    stairs[0] = 1;
    stairs[1] = 1;
    for(let i = 2; i <= n; i++){
        stairs[i] = stairs[i-1] + stairs[i-2];
    }
    return stairs[n];
};

let stairs = new Array(6 + 1);
stairs[0] = 1;
stairs[1] = 1;
for(let i = 2; i <= 7; i++){
    stairs[i] = stairs[i-1] + stairs[i-2];
}

console.log(stairs)