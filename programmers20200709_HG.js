function solution(w, h) {
    var answer = 1;
    var gcd = function(a, b){
        if(!b){
            return a;
        }
        return gcd(b, a%b);
    }
    
    var num = gcd(w,h);
    var gcd_w = w/num;
    var gcd_h = h/num;
    var unable_sqr = gcd_w+gcd_h-1;
    answer = (w*h) - (unable_sqr*num);
    
    return answer;
}
