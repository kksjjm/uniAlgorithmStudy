function solution(arrangement) {
    var answer = 0;
    var cnt = 0;
    
    for(var i = 0 ; i < arrangement.length ; i++){
        if(arrangement[i] == '('){
            cnt++;
        }
        else if (arrangement[i] == ')'){
            if (arrangement[i-1] == ')'){
                cnt--;
                answer++;
            }
            else{
                cnt--;
                answer += cnt;
            }
        }
    }
    return answer;
}