var isValid = function(s) {
   
    const obj = {
        '[' : 1,
        ']' : -1,
        '{' : 1,
        '}' : -1,
        '(' : 1,
        ')' : -1
    };
    let total = 0;
    for(let i = 0; i < s.length; i++){
        total += obj[s[i]];
        console.log(s[i])
    }
   if(total) return false;
   return true;
};

console.log(isValid('(})'));