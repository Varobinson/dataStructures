let str = {
    'the': 2,
    'us': 5
};
str['the']++
console.log(str)


function genDoc(){

}

function generateDocument(characters, document) {
    const charStorage = {},
    docStorage = {};
      for(let i = 0; i < characters.length; i++){
          if(charStorage[characters[i]]){
              charStorage[characters[i]]++;
          }else charStorage[characters[i]] = 1;
      }
      
      for(let i = 0; i < document.length; i++){
          if(docStorage[document[i]]){
              docStorage[document[i]]++;
            }else docStorage[document[i]] = 1;
      }
      console.log(JSON.stringify(charStorage))
      console.log(JSON.stringify(docStorage))

      if(JSON.stringify(charStorage) === JSON.stringify(docStorage)){
          return true;
        }
        return false;
    }

    function firstNonRepeatingCharacter(string) {
        const letters ={};
        let value;
          for(let i = 0; i < string.length; i++){
              if(!letters[string[i]]){
                  letters[string[i]] = 1;
              } else letters[string[i]]++;
          }
          console.log(letters)
          for(char in letters){
              if(letters[char] === 1) return char;
            }
            console.log(value)
        return -1;
    }

      


      function tournamentWinner(competitions, results) {
        const wins = {};
        const stats = [];
        let compare = 0;
        let winner;
        for (let i = 0; i < results.length; i++){
            if(results[i]){
            stats.push(competitions[i][0]);
            }else stats.push(competitions[i][1]);
        }
        for(let j = 0; j < stats.length; j++){
            if(!wins[stats[j]]){
                wins[stats[j]] = 1;
            } else{ 
                wins[stats[j]]++;
            }
            if(wins[stats[j]] > compare){
                compare = wins[stats[j]];
                winner = stats[j];
            }
        }
            return winner;
    }
    
        
        let comp = [
            ["HTML", "C#"],
            ["C#", "Python"],
            ["Python", "HTML"]];
           
        let res = [0, 0, 1];
          
          

        console.log(tournamentWinner(comp, res))