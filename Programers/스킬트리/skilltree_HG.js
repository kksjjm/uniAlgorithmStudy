function solution(skill, skill_trees) {
    var answer = 0;
    var enable = true;
    for(var i = 0 ; i < skill_trees.length ; i++, enable = true){
        var tmp = [...skill];
        for(var j = 0 ; j < skill_trees[i].length ; j++){
            if(tmp.indexOf(skill_trees[i][j]) == 0)
                tmp.shift();
            else if (tmp.indexOf(skill_trees[i][j]) > 0){
                enable = false;
                break;
            }
        }
        if (enable)
            answer++;
    }
    return answer;
}
