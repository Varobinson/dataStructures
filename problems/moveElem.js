const moveElementToEnd = (array, toMove) =>{
    let i = 0,
            j = array.length - 1;
       while(i < j){
           while(i < j && array[j] === toMove) j--;
           if(array[i] === toMove){
               //detructured sway i & j
               [array[j],array[i]] = [array[i],array[j]];
           }
           i++;
       }
            
       return array;
   }
   