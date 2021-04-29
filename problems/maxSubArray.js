//[2,-1,-3,4,-1,2,1,-5,4]
var maxSubArray = function(nums) {
    let curr = 0;
    let max = -Infinity;
    for(let i = 0; i < nums.length; i++){
        curr = Math.max(nums[i], nums[i] + curr);
        max = Math.max(max, curr);
    }
    return max;
};
