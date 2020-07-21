function solution(N, stages) {
    
    var answer = Array(N).fill(null).map((a,index) => a = index+1);  // 스테이지 수 만큼의 배열 선언 [1, 2, 3, ... ,N]
    var percentage = [];  // 스테이지 마다의 실패율을 저장하는 배열
    
    for(var i=0; i<N; i++){
        if(!stages.includes(i+1)){ // stages 배열에 해당 스테이지가 없을 경우 0을 push
            percentage.push(0);  
        }else{ // 아닐경우 확률을 계산한 후 push
            percentage.push(stages.filter(a => a == i+1).length/stages.filter(a => a >= i+1).length);
        }
    }
    
    answer = answer.sort(function(a,b){ // 실패율 배열을 기준으로 answer배열[1,2,3,...,N] 을 내림차순 정렬
       return percentage[a-1] > percentage[b-1] ? -1 : percentage[a-1] < percentage[b-1] ? 1 : a - b;
    });
    return answer;
}
