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
    return (n!==1) ? n + sumToRecursion(n-1):n;
}

function sumToProgression(n){
    return ((1+n)*n)/2;
}

alert("Цикл:" + sumToCycle(n));
alert("Рекурсия:" + sumToRecursion(n));
alert("Прогрессия:" + sumToProgression(n));