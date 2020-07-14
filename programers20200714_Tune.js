function solution(arrangement) {
    var answer = 0;
    var sticks = 0;
    var stick_div = 0;
    var arr=Array.from(arrangement);
    arr.forEach((b,index) =>{
        if(b=="("){  
            stick_div++;
           if(arr[index+1]!=")"){
                sticks++
            }else{
                answer=answer+(stick_div-1);
            }
        }else{
            stick_div--;
        }
    })
    return answer+sticks;
}