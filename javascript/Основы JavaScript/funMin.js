/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/2/13
 * Time: 11:37 AM
 * To change this template use File | Settings | File Templates.
 */
var a = prompt('Вводи число','');
var b = prompt('Вводи второе число','');
alert(getMin(a, b));
function getMin(a, b){
    return (a < b) ? a : b;
}
