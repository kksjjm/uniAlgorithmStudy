const s = "aabbaccc";

function solution(s) {
    var answer = s.length;
    let current = "";
    let interval = 1;
    let string = "";
    while(interval < s.length/2+1){
        current = s.slice(0,0+interval);
        let count = 0;
        console.log(current);
        for(let i=0; i<=s.length; i+=interval){
            if(current != s.slice(i,i+interval)){
                if(count>1){
                    string = string.concat(count.toString(), current);
                }else{
                    string = string.concat(current);
                }
                current = s.slice(i,i+interval)
                count = 1;
                console.log(string, current);
            }else{
                count++;
            }
        }
        string = string.concat(current);
        if(answer > string.length){
            answer=string.length;
        }
        string = "";
        interval++;
        console.log(answer);
    }
    return answer;
}

solution(s);