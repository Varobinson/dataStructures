const reverseWords = (string) =>{
	const letterArray = [], 
	        result =[];
	for(let letter in string){
		letterArray.push(string[letter]);
    }
    console.log(letterArray)
let currentString = [],
    i = 0;

while(i < letterArray.length){
	if(letterArray[i] === " "){
		result.unshift(currentString.join(''));
        result.unshift(' ');
        currentString = [];
        }else currentString.push(letterArray[i]);
        i++;
        console.log(result)
    } 
    result.unshift(currentString.join(''));
    return result.join('');
}

console.log(reverseWords("AlgoExpert is    the best!"));
