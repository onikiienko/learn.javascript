/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/16/13
 * Time: 7:53 PM
 * To change this template use File | Settings | File Templates.
 */
function unique(arr) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        if(result.indexOf(arr[i]) >= 0) {result.push(arr[i])};
        alert(result + arr[i] + result.indexOf(arr[i]));
    }
        return result;
}

var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"];

alert( unique(strings) ); // кришна, харе, 8-()


function unique(arr) {
    var obj = {};

    for(var i=0; i<arr.length; i++) {
        var str = arr[i];

        obj[str] = true; // запомнить строку в виде свойства объекта

    }

    return Object.keys(obj); // или собрать ключи перебором для IE<9
}

var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"];

alert( unique(strings) ); // кришна, харе, 8-()