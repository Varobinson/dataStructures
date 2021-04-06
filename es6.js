const names =['bob', 'jill','mac', 'pete'];

const checkName = name => names.indexOf(name); //loops until find

   console.log(checkName('joe')); //prints -1

// more readable
const checkName2 = (name) => { 
    return names.indexOf(name);
} 

   console.log(checkName2('joe')); //prints -1
   console.log(checkName2('jill')); //prints 1


const checkName3 = (name) => { 
    return names.includes(name); //loops over every item in list
} 

console.log(checkName3('jill')); //returns true
console.log(checkName3('joe')); //returns false