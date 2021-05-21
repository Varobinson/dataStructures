function taskAssignment(k, tasks) {
    const map = new Map();
   for(let i = 0; i < tasks.length; i++){
       if(map[tasks[i]]) map[tasks[i]].push(i);
       else map[tasks[i]]=[i];
   }
   console.log(map);
   const sortedTasks = tasks.sort((a,b) => a-b);
   const result = [];
   
   let left = 0,
       right = tasks.length -1; 

   while(left < right){
       const subArr = [];
       let task1 = map[sortedTasks[left]].pop(),
            task2 = map[sortedTasks[right]].pop();
       subArr.push(task1, task2);
       result.push(subArr);
       left ++;
       right --;
   }
 return result;
}

console.log(taskAssignment(3,[1,3,5,3,1,4]))