let arr =[[1, 22],
[-20, 30]];

// const mergeIntervals = (array) =>{
// 	array.sort((a,b) => a[0] - b[0]);
//     let i = 0;
//     const result = [];
//     console.log(array.length - 1);
// 	while(i < array.length - 1){
// 		let curr = array[i],
//             next = array[i + 1];
//             console.log(curr[1])
//         if(curr[1] >= next[0]){
//             curr.pop();
//             next.shift();
//             curr.push(curr[0]);
            
//         }else if (curr[1] >= next[0] && curr[1] >= next[1]){
//             array.splice(curr)
//         }
//         else result.push(curr);
//         i++;
//     } 
//     result.push(array[array.length - 1]);
//     return result;
// }

// console.log(mergeIntervals(arr));

const mergeIntervals = (array) =>{
	const sortedArray = array.sort((a,b) => a[0] - b[0]),
        result = [];
    let current = sortedArray[0];
    result.push(current);
    for(let next of sortedArray){
        const [_, currentEnd] = current;
        const [nextStart, nextEnd] = next;
        if(currentEnd >= nextStart) current[1] = Math.max(currentEnd, nextEnd);
        else{
        current = next;
        result.push(current)
    }
    
    return result;  
    }
}

console.log(mergeIntervals(arr));
