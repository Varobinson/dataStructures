const arr = [4,6,10,14,16,11];
const limit = 22;

const findMatch = (array,match) =>{
    const map = new Map();
    for(let i = 0; i < array.length;i++){
        if(map.has(arr[i])) return [i, map.get(arr[i])];
        map.set(match - arr[i], i);
    }
    return [];
}

const newMap = {};
newMap["8"] = [0,0];
newMap["8"] = [5,1];
newMap["8"] = [2,0];

console.log(newMap);

// console.log(findMatch(arr, limit))

console.log(parseInt('4'))
/* map = {
    "8" => [0 row, 0 column];
    "6" => [5,1]
} 

suduko[5][1]

traverse large array 
for each sub array traverse each value
    if()
    add each value to hash map with value being array 
                        this array contains row and column

*/
 

const sudoku =[  ["8","3",".",".","7",".",".",".","."]
                ,["6",".",".","1","9","5",".",".","."]
                ,[".","9","8",".",".",".",".","6","."]
                ,["8",".",".",".","6",".",".",".","3"]
                ,["4",".",".","8",".","3",".",".","1"]
                ,["7",".",".",".","2",".",".",".","6"]
                ,[".","6",".",".",".",".","2","8","."]
                ,[".",".",".","4","1","9",".",".","5"]
                ,[".",".",".",".","8",".",".","7","9"]];

const valid =(board)=>{

}