function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var cnt_truck = new Array(truck_weights.length);
    cnt_truck.fill(1);
    var i = 0;
    var tmp = 0;
    var bridge = [];
    var sum = 0;
    
    while(truck_weights.length > 0)
    {
        if((sum + truck_weights[0]) <= weight){
            bridge.push(truck_weights.shift());
            sum += bridge[bridge.length-1];
            tmp++;
        }
        answer++;
        
        for(var j = i ; j < tmp ; j++){
            if(cnt_truck[j] < bridge_length){
                cnt_truck[j]++;
            }
            else if (cnt_truck[j] >= bridge_length){
                sum -= bridge.shift();
                i++;
            }
        }
        
    }
    return answer+bridge_length;
}
