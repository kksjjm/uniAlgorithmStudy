function solution(arrangement) {
    
    var answer = 0;
    var cut_no = 0;  // 레이저가 자르게 될 현재 막대기의 갯수
    
    for(var i=0; i<arrangement.length; i++){
        if(arrangement[i]=='('){  
            if(arrangement[i+1]=='('){  // 연속해서 '('가 나올 때, 레이저가 자를 막대기 갯수 증가
                cut_no++;
            }else{   // '()'가 나왔을 때, answer에 레이저가 자른 막대기 수를 더하고 pointer 1 증가(레이저'()'를 한 묶음으로 생각)
                answer += cut_no;
                i++;
            }
        }else{  // ')'가 나왔을 때, answer에 1 더하고(가장자리 막대기가 하나 생기므로) 레이저가 자를 막대기 수 감소 
            answer++; 
            cut_no--;
        }
    }
    
    return answer;
}