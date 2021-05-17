// var containsDuplicate = function(nums) {
//     const hash ={};
//     for(let num of nums){
//         if(hash[num]){
//             return true
//         }else hash[num] = true;
//     }return false;
// };

// var containsDuplicate = function(nums) {
//     const hash = new Map();
//     for(let i = 0; i <nums.length; i++){
//         if(hash.has(nums[i])) return true;
//             hash.set(nums[i]);
//     }
//     return false;
// };


// console.log(containsDuplicate([1,4,2,5]))
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a - b);
    let last = -Infinity;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > last) last = nums[i];
        else return true;
    }
    return false;
};


console.log(containsDuplicate([1,4,2,5,4]))
















