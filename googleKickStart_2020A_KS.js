const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let [N, B] = readline().split(' ');
    let arr = readline().split(' ');
    console.log(`Case #${i}: ${solution(B, arr)}`);
}

function solution(B, arr){
    let total = 0;
    let count = 0;
    arr.sort((a,b) => a-b);
    
    for(let i=0; i<arr.length; i++){
        total+= parseInt(arr[i]);
        if(total <= B){
            count++
        }else{
            return count;
        }
    }
    return count;
}