/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 6/4/13
 * Time: 11:33 PM
 * To change this template use File | Settings | File Templates.
 */
var calculator = {
    readValues : function() {
        //this.firstNumber = +prompt('первое','');
        //this.secondNumber = +prompt('второе','');
    },
    sum : function() {
        return this.firstNumber + this.secondNumber;
    },
    mul : function() {
        return this.firstNumber * this.secondNumber;
    }
};

calculator.readValues();
//console.log(calculator.sum());
//console.log(calculator.mul());

/*Напишите функцию f, которая будет обёрткой вокруг другой функции g.
Функция f обрабатывает первый аргумент сама, а остальные аргументы
передаёт в функцию g, сколько бы их ни было. */

function f() {
    console.log(arguments[0]);
    g.apply(this, [].slice.call(arguments, 1));
}

function g(a, b, c) {
    console.log( (a || 0) + (b || 0) + (c || 0) );
}

f("тест", 1, 2); // f выведет "тест", дальше g посчитает сумму "3"
f("тест2", 1, 2, 3); // f выведет "тест2", дальше g посчитает сумму "6"

arr = ["a", "b"];

arr.push( function() { alert(this); } )

arr[2](); // "a","b",function
