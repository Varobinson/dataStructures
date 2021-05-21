const word = [1,2,3,4,5,6];

function run(arr){
    let i = 0,
        j = arr.length - 1;
    while(i < j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }return arr;
}

console.log(run(word))