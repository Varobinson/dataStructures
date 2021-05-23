 
//  const arr = [1,2,2,3,4],
//  hash = new Map();
//  for (let num of arr){
//     hash[num] = (hash[num] || 0) + 1;
//  }
//  console.log(hash)





 function validAnagram(str1, str2){
    const strMap = new Map();
    const anagramMap = new Map();
    
    if(str1.length !== str2.length) return false;
    
    for(let val of str1){
        strMap[val] = (strMap[val] || 0) + 1;
    }
    for(let val of str2){
        anagramMap[val] = (anagramMap[val] || 0) + 1;
    }
    console.log(anagramMap)
    console.log(strMap)
    for(let key in strMap){
        if(anagramMap[key] === strMap[key] ) continue;
        else return false;
    }
    return true;
  }

  console.log(validAnagram('cang', 'ancr'))