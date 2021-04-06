let numbers = [1,2,3,4,5,6,7,8,9];


const linearSearch = (arr, value) => {
    for(let i = 0; i < arr.length;i++){
        if (arr[i] == value){
            return true;
        }
    }
    return false;
}

console.log(linearSearch(numbers,12))
