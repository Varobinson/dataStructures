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

// console.log(myTable.getItem('name'));

class Hash2{
    constructor(size){
        this.size = size;
        this.values = {};
    }

    hashKey(key){
        const hash = key.toString();
        let sum = 31;
        
        for(let i = 0; i < hash.length; i++){
            sum += hash.charCodeAt(i);
        }
        return sum % this.size;
    };

    addHash(key, value){
        const hashedKey = this.hashKey(key);
        if(!this.values.hasOwnProperty(hashedKey)){
            this.values[hashedKey] = [];
            this.values[hashedKey][key] = value;
        }
        else if(!this.values[hashedKey].hasOwnProperty(key)){
            this.values[hashedKey][key] = value;
        }else console.log(`${key} already exists`);
    };

    getHash(key){
        const hash = this.hashKey(key);
        if(this.values[hash]){
        return this.values[hash][key]
        }else{
            return undefined;
        }
    };

    removeHash(key){
        const hash = this.hashKey(key);
        if(!this.values.hasOwnProperty(hash) || !this.values[hash][key]){
            return undefined;
        }else{
            delete this.values[hash][key];
        }
    };
}

const myHash = new Hash2(11);
myHash.addHash('item1' , 'value1');
myHash.addHash('ite2m' , 'vaule2');
myHash.addHash('item2' , 'value2');
myHash.addHash('tiem2' , 'value2');

console.log(myHash)
console.log(myHash.getHash('item2'))
myHash.removeHash('item2')
console.log(myHash)
console.log(myHash.getHash('item2'))

// console.log(''.charCodeAt()-96)


// function caesarCipherEncryptor(string, key) {
//     const arr = [];

//     for(let i = 0; i < string.length; i++){
//           if(string[i].charCodeAt() + key > 122){
//             arr.push(String.fromCharCode(string[i].charCodeAt() + key % 26));
//           }
//           else{
//             arr.push(String.fromCharCode(string[i].charCodeAt() + key));
//         }
//       }
//       console.log( 25 % 26);
//   }
  
//   caesarCipherEncryptor('abc', 52)