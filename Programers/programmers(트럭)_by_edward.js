function solution(bridge_length, weight, truck_weights) {
    
    var position = Array(bridge_length).fill(0);
    var total_weight = 0;
    var order = 0;
    
    for(var i=0; order==0 || total_weight!==0; i++){
        var k = position.pop();
        if(k!=0){
            total_weight -= k;
        }
        if(total_weight+truck_weights[order]<=weight){
            position.unshift(truck_weights[order]);
            total_weight += truck_weights[order];
            order ++;
        }else{
            position.unshift(0);
        }
    }
    
    return i
}

