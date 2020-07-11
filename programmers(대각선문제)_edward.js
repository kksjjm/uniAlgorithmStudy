function solution(w, h) {

    for(var i=1; 1; i++){  // 기울기의 분모(i)를 구하는 for문
        if(Number.isInteger(h/w*i)){  // 세로길이/가로길이 에 i를 곱했을 때 정수인지 아닌지 판별
            break;
        }
    }

    var answer = w*h-(w+h-(w/i));

    return answer;
}