/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    const hash = {};
    const hashT = {};
    if(t.length !== s.length) return false;
    for(let letter of s){
        if(hash[letter]){
            hash[letter]++;
        } else hash[letter] = 1;
    } 
    for(let letter of t){
        if(hashT[letter]){
            hashT[letter]++;
        } else hashT[letter] = 1;
    }
    for(let val of t){
        if(hashT[val] !== hash[val]) return false;
    }
    return true;
};
console.log(isAnagram('anagram','nagaram'));
console.log(isAnagram('rat','car'));
