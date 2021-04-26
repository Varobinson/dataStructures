// let arr = [1,5,2,4,3,6];
// let half = (arr.length) / 2;
// arr = arr.sort((a,b) => a - b)
// console.log(arr)

const bike ={
    "redShirtSpeeds": [5, 5, 3, 9, 2],
    "blueShirtSpeeds": [3, 6, 7, 2, 1],
    "fastest": false
  }

function giveMax(maxSpeeds){
    let sum = 0;
    for(let speed of maxSpeeds){ //o(n)
        sum += speed; // o(1)
    }
    return sum;
}
function giveMin(minSpeeds){
    let sum = 0;
    for(let speed of minSpeeds){ //o(n)
        sum += speed; // o(1)
    }
    return sum;
}

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    const allSpeeds = []; //o(1)
    for(let i = 0; i < redShirtSpeeds.length; i++){ //o(n)
        allSpeeds.push(redShirtSpeeds[i], blueShirtSpeeds[i]); //o(1)
    }
    allSpeeds.sort((a,b) => a - b); //o(nlogn)
    const half = allSpeeds.length/2; // o(1)
    const minSpeeds = allSpeeds.slice(0,half);// o(1)
    const maxSpeeds = allSpeeds.slice(half);// o(1)
    if(fastest){ // o(1)
        return giveMax(maxSpeeds);
    }
    return giveMin(minSpeeds);
  }

  console.log(tandemBicycle(bike['redShirtSpeeds'], bike['blueShirtSpeeds'], false))
