// https://programmers.co.kr/learn/courses/30/lessons/62048

//Test
const w = 1000;
const h = 999;

// 짱짱맨
function solution(w, h) {
    var answer = w*h;
    let y = 0;
    if(w > h){
        for(let x=1; x<=h; x++){
            answer -= Math.ceil(x*w/h - Math.floor(y));
            y = x*w/h;
        }
    }else if(w < h){
        for(let x=1; x<=w; x++){
            answer -= Math.ceil(x*h/w - Math.floor(y));
            y = x*h/w;
        }
    }else{
        answer -= w;
    }
    return answer;
}

