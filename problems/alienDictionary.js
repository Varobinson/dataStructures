console.log([4] > [11])

const wordToNums = (word, store) =>{ 
	let nums = [];
	for(let lets in word){
		nums.push(store.get(word[lets]))
    }
    console.log(nums)
    return nums;
} 

var isAlienSorted = function(words, order) {
    let lettStore = new Map(),
		wordNumbers = [];
	
	for(let i = 0; i < order.length; i++){
		lettStore.set(order[i], i) 
        }

    console.log(lettStore)
    for(let word of words){
        let newNums = wordToNums(word, lettStore);
        wordNumbers.push(newNums);
        }
	console.log(wordNumbers)
	for(let i = 0; i < wordNumbers.length - 1; i++){
		if( wordNumbers[i] > wordNumbers[i + 1] ){
			return false;
        }
    }return true;
};

let w = ["word","world", "row"]
let o = "worldabcefghijkmnpqstuvxyz"

console.log(isAlienSorted(w,o))