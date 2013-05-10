/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/10/13
 * Time: 9:16 PM
 * To change this template use File | Settings | File Templates.
 */

    alert("13".valueOf() + "15".valueOf());

//Выведем отрезок символов юникода с кодами от 1034 до 1113:
var str = '';
for (var i=1034; i<=1113; i++) {
    str += String.fromCharCode(i);
}
alert(str);

//unicode
alert( String.fromCharCode(1072) ); // 'а'
alert( "барада".charCodeAt(0) ); // 'а'


/*Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength — заменяет конец str на '…', так чтобы ее длина стала равна maxlength.

 Результатом функции должна быть (при необходимости) усечённая строка.*/

alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );// "Вот, что мне хотело…"
alert( truncate("Всем привет!", 20) );// "Всем привет!"

function truncate(str, maxStringLength){
    return (str.length > maxStringLength) ? str.slice( 0, maxStringLength - 1) + '…' : str;
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

function checkSpam(str){
    return ~str.toLowerCase().indexOf( 'xxx' ) >= 0 || ~str.toLowerCase().indexOf( 'viagra' ) >= 0;
}

var str = "stringify";
alert(str.substring(0,1)); // "s", символы с позиции 0 по 1 не включая 1. slice the same.
alert(str.substring(2)); // ringify, символы с позиции 2 до конца. slice the same.
alert( "testme".substring(-2) );  // "testme", -2 становится 0
alert( "testme".substring(4, -1) );  // "test"
// -1 становится 0 -> получили substring(4, 0)
// 4 > 0, так что аргументы меняются местами -> substring(0, 4) = "test"

alert( "testme".slice(-2) );  // "me", от 2 позиции с конца
alert( "testme".slice(1, -1) ); // "estm", от 1 позиции до первой с конца.

str = str.substr(2,4); // ring, со 2й позиции 4 символа
alert(str);


var str = "Widget";

if( ~str.indexOf("get") ) {
    alert('совпадение есть!');
}

str = prompt('Введите слово','');
alert(ucFirst(str));

function ucFirst(str){
    var i = 1;
    var newWord = str.charAt(0).toUpperCase();
    do{
        newWord += str.charAt(i);
        i++;
    }while(str.charAt(i) != '');
    return newWord;
}

var str = "Widget with id";

alert( str.indexOf("Widget") ); // 0, т.к. "Widget" найден прямо в начале str
alert( str.indexOf("id", 2) ); // 1, т.к. "id" найден, начиная с позиции 1
alert( str.indexOf("Lalala") ); // -1, подстрока не найдена



var str = "I\'m a JavaScript \"programmer\" ";
alert(str);
alert("\a");
var str = "My\n\d\\\\\ "; // 3 символа. Третий - перевод строки

var a = 4;

alert(str.length);  // 3

var str = "jQuery";
alert( str.charAt(0) );

var str = "Я - современный браузер!";
alert(str[0]);  // "Я", IE8+

alert( "".charAt(0) ); // пустая строка
alert( ""[0] ); // undefined, IE8+


var str = "строка";
str = str +  str.charAt(3) + str.charAt(4) + str.charAt(5);
alert(str); // ока

alert( "Интерфейс".toUpperCase() ); // ИНТЕРФЕЙС
alert( "Интерфейс".charAt(0).toLowerCase() ); // ИНТЕРФЕЙС

