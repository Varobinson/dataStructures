const array = [1,2,3,4,5];
const child = (num,arr)=>{
    arr.push(num *3);
};
const parent = (arr) =>{
    const results = [];
    for(const value of arr){
        child(value,results);
    }
    return results;
};

console.log(parent(array));