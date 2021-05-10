let  logs = ["1 n u", "r 527", "j 893", "6 14", "6 82"]

const sortData = (data) =>{
    const letters = [];
    const digits = [];
    let i = 0
    let j = 0;
    //divides digits and letters
    while(i < logs.length){
        while( logs[i][j] !== ' ' ){
            j++;     
        }
        let code = logs[i][j + 1].charCodeAt() - 96;
        if(code > 0 && code < 27){
        letters.push(logs[i]);
        }else digits.push(logs[i]);
        i++;
    }
    console.log(digits)
    console.log(digits[0][digits[0].indexOf(' ') - 1])
    console.log(digits[1][digits[1].indexOf(' ') - 1])
    for(let i = 0; i < digits.length - 1; i++){
        let curr = digits[i].indexOf(' ') - 1,
            next = digits[i + 1].indexOf(' ') - 1;
        if(digits[i][curr] > digits[i + 1][next]){
            [digits[i], digits[i + 1]] = [digits[i + 1], digits[i]]
        }

    }
    for(let i = 0; i < letters.length - 1; i++){
        let curr = letters[i].indexOf(' ') + 1,
            curr2 = letters[i].indexOf(' ') - 1,
            next = letters[i + 1].indexOf(' ') + 1,
            next2 = letters[i + 1].indexOf(' ') + 1;
        if(letters[i][curr] > letters[i + 1][next] && letters[i][curr2] > letters[i + 1][next2]){
            [letters[i], letters[i + 1]] = [letters[i + 1], letters[i]]
        }

    }
    console.log(digits)
    return[...letters, ...digits]
}

console.log('g' > "a")
console.log(sortData(logs))

// for(let i = 0; i < digitss.length - 1; i++){
//     let curr = i,
//         next = i + 1;
//     if(digits[curr].indexOf(' ') - 1 > digits[next].indexOf(' ') - 1){
//         [curr, next] = [next,curr]
//     }

// }