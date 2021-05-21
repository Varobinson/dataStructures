const word = 'gate here read eve';

function run(str){
    let i = 0,
        j = str.length - 1;
    
    const arr = str.split(' ');
    console.log(arr)
    while(i < j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }return arr;
}

console.log(run(word))