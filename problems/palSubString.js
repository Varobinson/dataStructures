const string = "abaxyxxyxf"

console.log(string.slice(0,1))


const longestPalindromicSubstring = (string) => {
    if(helperIsPal(string)) return string;
   
let longest = "";
   for(let i = 0; i < string.length; i++){
        for(let j = 0; j < string.length; j++){
            const word = string.slice(i , j + 1);
            if(helperIsPal(word) && word.length > longest.length){
                longest = word;
            }
        }
    }return longest;
}

function helperIsPal(str){
   let start = 0,
        end = str.length -1;
   while (start <= end){
       if(str[start] !== str[end]) return false;
       start ++;
       end--;
    }return true;
}


/*0(n^3)
if string is palindrome return string length

pal count = 3

              |
string = "abaxyxxyxf"
              |
loop through char in sting 
            loop each char for each char
       current word equal slice between loop 1 and 2
       call helper on current word if this is true 
           check if length is greater than pal count 
               if so add to storage
           if not continue


helperfunction to check if there is a pal takes string
   start point at 0 idx
   end at last idx
   while start is greater than or equal to end 
       if start is not equal to end return false
       increment start
       decrement end
return true if all char match
*/
