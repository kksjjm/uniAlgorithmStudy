function solution(arrangement) {
    var answer = 0;
    let recentOpener = 0;
    let workSpace = []; // workSpace라는 별도의 배열 선언
    
    for(let i=0; i<arrangement.length; i++){ // 여는괄호일 경우 workSpace에 추가
        if(arrangement[i]=="("){
            workSpace.push(arrangement[i]);
            recentOpener = i; // 가장 최근에 추가된 여는괄호의 index를 변수에 담아줌
        }else{
          if(workSpace[workSpace.length-1] == "("){ // 닫는 괄호일때
                if(recentOpener == i-1){ //가장 최근에추가된 여는 괄호가 바로 전꺼라면 
                    workSpace.pop(); // 여는 괄호 빼내고
                    answer += workSpace.length; // 현재 workSpace에 있는 괄호 숫자만큼 파이프 추가
                }else{  // 만양 가장 최근의 추가된 괄호가 바로이전것이 아니라면
                    answer += 1; // 파이프는 1개만 추가하고
                    workSpace.pop(); // workSpace에서 여는괄호 빼냄
                }
            }
        }
    }
    return answer;
}