var hasCycle = function(head) {
    if(!head) return false;
    while(head){
        if(head.val === "passed") return true
        head.val = "passed";
        head = head.next;
    }
    return false;
};