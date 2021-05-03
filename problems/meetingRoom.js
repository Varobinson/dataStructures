//best solution 0(nlogn) time 0(1)storage

var canAttendMeetings = function(intervals) {
    if(intervals < 2) return true;
    
    let sorted = intervals.sort((a,b) => a[0] - b[0]);
    for(let i = 0; i < sorted.length - 1; i++) {
        if(sorted[i][1] > sorted[i+1][0]) return false;
    }
    return true;
};

//my initial solution 0(n^2) time 0(n)storage

var canAttendMeetings = function(intervals) {
    const hash = {};
    if(intervals.length < 2) return true;
    for(let time of intervals){
        for(let j = time[0]; j < time[1];j++){
            if(hash[j]) return false;
            hash[j] = true;
        }
    }return true;
};