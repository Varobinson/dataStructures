const arr = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayOfProducts = (array) =>{
	const result = [],
	total = array.reduce((acc,curr) => acc * curr); //40
	for(let i = 0; i < array.length; i ++){
		result.push(total / array[i] || 0);
	}return result;
}

console.log(arrayOfProducts(arr));
