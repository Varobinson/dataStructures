const arr = [ 5,1,2,4];
const arrayOfProducts = (array) =>{
    const result = [];
    for (let i = 0; i < array.length; i++){
        array.fill(1,array[i]);
        let total = array.reduce((acc,curr) => acc * curr); //40
        result.push(total);
    }return result;
}




console.log(arrayOfProducts(arr));
