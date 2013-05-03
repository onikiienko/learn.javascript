/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/2/13
 * Time: 11:47 AM
 * To change this template use File | Settings | File Templates.
 */
var x = prompt('Вводи число','');
var n = prompt('Вводи второе число','');
(n <= 0) ? alert('Введите n целое, больше 1.') : alert(calcPow(x, n));
function calcPow(x, n){
    var result = x;
    var i = 1;
    do{
        result *= x;
        i++;
    }while(i < n)
    return result;
}

