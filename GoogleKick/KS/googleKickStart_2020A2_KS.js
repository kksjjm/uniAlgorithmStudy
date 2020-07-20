const fs = require('fs');
const input = fs.readFileSync('2020A2.text', 'utf8').trim().split('\n');

console.log(input);

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
let arr = [];
for(let i = 1; i <= T; i++){
    let [N,K,P] = readline().split(' ');
    for(let j=0; j<N; j++){
        arr[j] = readline().split(' ');
    }
    console.log(N,K,P);
    console.log(arr);
    console.log(`Case #${i}: ${solution(N, P, K, arr)}`);
}

function solution(N, P, K, arr){
    let plates = [];
    let sum = 0;
    for(let i=1; i<=N; i++){
        for(let j=1; j<=P; j++){
            for(let x=1; x<= Math.min(j,K); x++){
                for(let c=0; c<x; c++){
                    sum += arr[i][c];
                }
                plates[i][j] = Math.max(plates[i][j], plates[i-1][j-x] + sum)
                console.log(plates);
            }
            
        }
    }
    return plates;
}