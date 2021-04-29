var mergeTwoLists = function(l1, l2) {
     
    if(l2 === null) return l1;
    if(l1 === null) return l2;
    let head ;
    while(l1 || l2){
         if(l1.val <= l2.val){
            head = l1;
        }else head = l2;
        
        if(l1.val > l2.val ){
            let temp = l2.next;
            l2.next = l1;
            l2 = temp;
        }else if(l1.val <= l2.val){
            let temp = l1.next;
            l1.next = l2;
            l1 = temp;
        }
    } 
   
   
    return head;
};