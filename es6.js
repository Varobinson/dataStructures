const names =['bob', 'jill','mac', 'pete'];

const checkName = name => names.indexOf(name) >= 0 ? true : false; 

   console.log(checkName('joe'));

// more readable
const checkName = (name) => { 
    return names.indexOf(name) >= 0 ? true : false;
} 

   console.log(checkName('joe'));