/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/3/13
 * Time: 1:41 PM
 * To change this template use File | Settings | File Templates.
 */
var n = +prompt("Число?","");

function sumToCycle(n){
    var result= 0;
    for (var i = n; i > 0; i--){
        result += i;
    }
    return result;
}

function sumToRecursion(n){
    return (n !== 1) ? n + sumToRecursion(n-1):n;
}

function sumToProgression(n){
    return ((1+n)*n)/2;
}

function factorial(n){
    if (n == 0) return 1;
    if (n > 0){
        return (n !== 1) ? n * factorial(n-1):n;
    }
    if (n < 0){
        return (n !== 1) ? n * factorial(n+1):n;
    }
}

function fibonachi(n){
    var fibn_1 = 1;
    var fibn_2 = 0;
    var fibn = 0;
    for (var i = 1; i < n; i++){
        fibn = fibn_1 + fibn_2;
        fibn_2 = fibn_1;
        fibn_1 = fibn;
    }
    return fibn;
}

function fibonachiRec(n){
    return n <= 1 ? n : fibonachiRec(n-1) + fibonachiRec(n-2);
}

alert("Фибоначчи рекурсия:" + fibonachiRec(n));
alert("Фибоначчи:" + fibonachi(n));
alert("Цикл:" + sumToCycle(n));
alert("Рекурсия:" + sumToRecursion(n));
alert("Прогрессия:" + sumToProgression(n));
alert("Факториал:" + factorial(n));