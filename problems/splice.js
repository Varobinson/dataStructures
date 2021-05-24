 
// //  const arr = [1,2,2,3,4],
// //  hash = new Map();
// //  for (let num of arr){
// //     hash[num] = (hash[num] || 0) + 1;
// //  }
// //  console.log(hash)





//  function validAnagram(str1, str2){
//     const strMap = new Map();
//     const anagramMap = new Map();
    
//     if(str1.length !== str2.length) return false;
    
//     for(let val of str1){
//         strMap[val] = (strMap[val] || 0) + 1;
//     }
//     for(let val of str2){
//         anagramMap[val] = (anagramMap[val] || 0) + 1;
//     }
//     console.log(anagramMap)
//     console.log(strMap)
//     for(let key in strMap){
//         if(anagramMap[key] === strMap[key] ) continue;
//         else return false;
//     }
//     return true;
//   }

//   console.log(validAnagram('cang', 'ancr'))



  
// const maxsub = (arr, num) =>{
//     let max = 0;
//     let tempMax = 0;
//     if(arr.length < num) return false;
//     for(let idx = 0; idx < num; idx++){
//         max += arr[idx];
//     }
//     tempMax = max;
//     for(let idx = num; idx < arr.length; idx){
//         tempMax = tempMax - arr[idx - num] + arr[idx];
//         max = Math.max(max, tempMax);
//     }
//     return max;
// }

function validateIP(ip) {
	/**
	@param ip: string
	@return: boolean
	*/
  const str = ip.split(".");
  console.log(str)
  if(str.length > 4 || str.length < 4) return false;
 
  for(let char of str){
      if(parseInt(char) === undefined || char === '') return false;
  }

   for(let char of str){
        if(parseInt(char) < 0 || parseInt(char) > 255) return false;
        }
	return true;
}
const arr = new Array(5 +1).fill(0)
const p = "192..168.0.1";
console.log(validateIP(p))
console.log(String.fromCharCode())
console.log(arr)