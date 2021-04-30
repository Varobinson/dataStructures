let s = "race a car"
//let s = "A man, a plan, a canal: Panama"


// var isPalindrome = function(s) {
//     let word = [],
//     res = [];
//     if(!s) return null;
//     s = s.toLowerCase().replace(/[^a-z0-9]/g,"");
//     console.log(s[0]);
//     console.log(s[0].charCodeAt() - 96);
//     for(let i = 0; i < s.length; i++){
//         word.push(s[i]);
//     }
//     for(let i = word.length - 1; i >= 0; i--){
//         res.push(word[i]);
//     }
//     console.log(res.join());
//     console.log(word.join());
//     return res.join() === word.join();
// };

// console.log(isPalindrome(s))

var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^a-z0-9]/g,"");
    let reverseString = string.split('').reverse().join("")
    return reverseString === string;
};