const hash = (key, arrayLen) =>{
    let total = 0;
    for(let char of key){
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

console.log(hash('red', 11));


function has(key, arrayLen){
    let total =0;
    let prime = 31;
    for(let i =0; i< Math.min(key.length, 100);i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * prime + value) % arrayLen;
    }
    return total;
}