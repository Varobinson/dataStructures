function hash(string, tableSize){
    let total = 31;
    for(let s of string){
      total = ( 13 * total * s.charCodeAt(0) - 96) % tableSize;
    }
    return total;
}



class HashTable {
    table =  new Array(100);

    setItem = (key, value) => {
        const idx = hash(key, this.table.length);
        this.table[idx] = [[key,value]];
    };

    getItem = (key) =>{
        const idx = hash(key, this.table.length);
        return this.table[idx];
    };
}

const myTable = new HashTable();

myTable.setItem('name', 'bob');
myTable.getItem('name');

console.log(myTable.getItem('name'));

