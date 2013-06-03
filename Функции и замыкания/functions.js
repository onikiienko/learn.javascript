/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/23/13
 * Time: 7:36 PM
 * To change this template use File | Settings | File Templates.
 */
function sayHi() {
    console.log(sayHi);
}

sayHi();

sayHi.test = 5;
var newSayHi = sayHi;

console.log(newSayHi.test); // выведет код функции
newSayHi.test = 6;
console.log(sayHi.test); // выведет код функции

//Каков будет результат выполнения кода?

function g() { return 1; }
console.log(g);
//А такого? Будет ли разница, если да — почему?

(function g1() { return 2; });

//console.log(g1);

//Что будет при повторном вызове функции?

var f = function sayHi(n) {
    console.log(n);
    sayHi = 0; // перезаписываем имя функции
};

f(1); // что выведет?
f(2); // а теперь что выведет?

var f = function sayHi() {
    "use strict";

    sayHi = 0;  // ошибка в современных браузерах
    console.log("При корректной работе интерпретатора мы не увидим этот alert");
}

f();

