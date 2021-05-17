
function findPal(str){
    let subStr = '';
    const subStrings = [];
    if(!str) return [];
    if(isPal(str)) return str;
    for(let i = 0; i < str.length;i++){
        let j = i + 1;
        subStr += str[i];
        while(str[i] !== str[j]){
            if(j === str.length) return;
            subStr += str[j];
            j++;
        }
        if(isPal(subStr)) subStrings.push(substr);
        subStr = '';
    }   
    return subStrings; 
}




function isPal(str){
    let j = 0,
    i = str.length - 1;

    while(j <= i){
        if(str[j] !== str[i]) return false;
        j++;
        i--;
    }
    return true;
}

console.log(findPal('aba'))