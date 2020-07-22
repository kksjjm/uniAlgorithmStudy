const people = 	[40, 41, 42, 43, 44, 54, 60, 59, 58];
const limit = 100;

function solution(people, limit) {
    var answer = people.length;
    people = people.sort((a,b) => a-b);
    people = people.filter(p => p + people[0] <= limit);
    console.log(people);
    while(people.length > 1){
        let searched = 0;
        for(let i=people.length-1; i>0; i--){
            console.log(people[0], people[i]);
            if(people[0] + people[i] <= limit){
                people.splice(i,1);
                people.shift();
                answer --;
                console.log(people);
                break;
            }
            searched = i;
        }
        if(searched == 1){
            break;
        }
    }

    console.log(answer);
    return answer;
}

solution(people, limit);