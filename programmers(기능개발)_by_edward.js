function solution(progresses, speeds) {
    
    var days = progresses.map((a,index) => a = Math.ceil((100-progresses[index])/speeds[index]));
    var answer = [];
    var count = 0;
    var max = days[0];
    
    for(var i=0; i<days.length; i++){
        count++;
        if(i==days.length-1){
            answer.push(count);
            break;
        }
        else if(days[i+1]>max){
            answer.push(count);
            max = days[i+1];
            count = 0;
        }
    }
    
    return answer;
}