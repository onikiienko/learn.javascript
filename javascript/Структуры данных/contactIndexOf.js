/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/20/13
 * Time: 8:11 PM
 * To change this template use File | Settings | File Templates.
 */
var arr = [1,2];

var newArr = arr.concat(3,4);

console.log(newArr); // 1,2,3,4

//Если value — массив, то concat добавляет его элементы.

var arr = [1,2];

var newArr = arr.concat( [3,4], 5);// то же самое, что arr.concat(3,4,5)

console.log(newArr); // 1,2,3,4,5

var arr = [ 1, 0, false ];

console.log( arr.indexOf(0) ); // 1
console.log( arr.indexOf(false) ); // 2
console.log( arr.indexOf(null) ); // -1


var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

//alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"



