function solution(progresses, speeds) {
    var answer = [];
    answer[0]=0;
    var period = [];
    for(var i=0;i<progresses.length;i++){
        period.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    var pre_task_period = period[0];
    period.forEach(p=>{
        if(p<=pre_task_period){
            answer[answer.length-1]++
        }else{
            pre_task_period = p;
            answer.push(1);
        }
            
    })
    
    return answer;
}