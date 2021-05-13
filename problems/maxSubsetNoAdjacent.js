const array = [9,12,8,30,4,7,6];
const maxSums = array.slice();

maxSums[1] = Math.max(array[0], array[1])

console.log(maxSums)