function solution(progresses, speeds) {
    var answer = [];
    var tmp = Math.ceil((100-progresses[0])/speeds[0]);
    var cnt = 0;
    for(var i = 0 ; i < progresses.length ; i++){
        console.log(tmp+','+Math.ceil((100-progresses[i])/speeds[i]));
        if (tmp >= Math.ceil((100-progresses[i])/speeds[i])){
            cnt++;
        }
        else {
            answer.push(cnt);
            cnt = 1;
            tmp = Math.ceil((100-progresses[i])/speeds[i]);
        }
    }
    answer.push(cnt);
    return answer;
}
