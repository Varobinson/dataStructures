function smallestDifference(a1, a2) {
    a1.sort((a,b)=> a-b);
      a2.sort((a,b)=> a-b);
      let lowest = Infinity,
              x = 0,
              y = 0,
              n1,
              n2;
      while(x < a1.length && y < a2.length){
          let total = Math.abs(a1[x]-a2[y]);
          if(total === 0) return [a1[x],a2[y]];
          else if(lowest > total){
              lowest = total;
              [n1,n2] = [a1[x],a2[y]];
          }
          if(a1[x]>a2[y]){
              y++
          }else x++
      }return [n1,n2];
  }