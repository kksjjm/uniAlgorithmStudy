function solution(s) {
    
    var answer = s.length;
    
    for(var i=1; i<s.length; i++){
        
        let spliced = [];   // 잘린 문자열을 저장하는 배열
        let number = [];   // 반복값을 저장하는 배열
        let count = 1;  // 반복값
        let length = s.length; // 반복값을 제거한 문자열의 길이
        let result = 0;  // 결괏값
        
        for(var j=0; j<Math.ceil(s.length/i); j++){   //문자열을 잘라주는 루프
            spliced.push(s.slice(j*i,(j+1)*i));
        }
        
        for(var k=1; k<spliced.length; k++){
            if(spliced[k]==spliced[k-1]){ // 배열이 반복됐을 때
                count++;
                length -= i;
            }else{ // 배열이 달라졌을 때
                number.push(count);
                count = 1;
            }
        }
        number.push(count);
        result = length + number.filter(a=>a!=1).join('').length;
        if(result<answer){
            answer = result;
        }
    }
    return answer;
}