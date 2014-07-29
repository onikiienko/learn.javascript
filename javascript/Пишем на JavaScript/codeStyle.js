runningFirstCode();
runningSecondCode();

function runningFirstCode(){
var x = prompt('x?', '');
var n = prompt('n?', '');

(n > 0) ? alert(powFirst(x, n)) : alert('Степень ' + n + ' не поддерживается, введите целую степень, большую 0');
}

function powFirst(x, n){
    var result = x;

    for(var i = 1; i < n; i++) { result *= x;}

    return result;
}

function runningSecondCode(){
    var x = prompt('x?', '');
    var n = prompt('n?', '');

    if (n >= 1 && n == Math.round(n)) {alert(powSecond(x, n));}
}

function powSecond(x, n){
         return (n == 1) ? x : x * powSecond(x, n - 1);
}
