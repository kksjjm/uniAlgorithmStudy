function solution(skill, skill_trees) {
    
    var answer = 0;
    var skill_array = skill.split('');
    
    for(var i=0; i<skill_trees.length; i++){
        var index_array = [];
        skill_array.forEach(function(n){
            index_array.push(skill_trees[i].indexOf(n));
        });
        var new_array = index_array.map(a => a==-1 ? Infinity:a);
        if(new_array.find((a,index) => a>new_array[index+1])==undefined){
            answer++;
        }
    }
    return answer;
}