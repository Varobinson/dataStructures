const findPeaks = (arr) =>{
	const peaks =[];
	for(let i = 1; i < arr.length - 1;i++){
		if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]){
			peaks.push(i);
		}
	}
    return peaks;
}

const longestPeak = (array) =>{
    const newPeaks = findPeaks(array);
    return newPeaks;
}
console.log(longestPeak([1,2,3,3,4,0,10,6,5,-1,-3,2,3]))