function solution(skill, skill_trees) {
    var answer = 0;
    const skill_arr=Array.from(skill);
    skill_trees.forEach(st=>{
        var tf= true;
        var serial_skill=Array.from(st).filter(s=>skill_arr.includes(s));
        serial_skill.forEach((s,index)=>{
           if(skill_arr[index]!=s){
               tf=false;
           }             
       })
       if(tf){answer++}
    })
    return answer;
}