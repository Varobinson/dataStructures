// Given two arrays check if arr2 has all the values in arr1 but squared

function same(arr1,arr2){
    if(arr1.length !== arr2.length) return false;

    let fq1 = {};
    let fq2 = {};

    for(let num of arr1){
        fq1[num] = (fq1[num] || 0) + 1;
    }
    for(let num of arr2){
        fq2[num] = (fq2[num] || 0) + 1;
    } 
    console.log(fq1)
    console.log(fq2)

    for (let key in fq1){
        if(!(key ** 2 in fq2)){
            return false;
        }
    
        if(fq2[key ** 2] !==  fq1[key]){
            return false;
        }
    }
    return true;
}

// same([1,2,3], [4,9,1]); true
// same([1,2,3], [4,4,1]); false
// same([1,6,3], [4,9,1]); false
// same([1,2,3], [4,9]); false

function validAnagram(x,y){
    if(x.length !== y.length) return false;

    let counter1 = {};
    let counter2 = {};

    for(let val of x){
        counter1[val] = (counter1[val] || 0) + 1;
    }
    
    for (let val of y){
        counter2[val] = (counter2[val] || 0) + 1;
    }

   for(let val in counter1){
       if(!(val in counter2)){
           return false;
       }
       if(counter1[val] !== counter2[val]){
           return false;
       }
   }

    return true;
}

validAnagram('car','rat');
validAnagram('azz','zaz');
validAnagram('azz','za');
validAnagram('aaa','zaz');