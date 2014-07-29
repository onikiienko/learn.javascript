function f() {
    var a = Math.random();

    function g() { }

    return g;
}

var g = f();  // функция g жива
// а значит в памяти остается соответствующий объект переменных 
console.log(g);
g = null;     // ..а вот теперь память будет очищена
console.log(g);


function makeCounter() {
    var currentCount = 0;

    // возвращаемся к функции
    function counter() {
        return ++currentCount;
    }

    // ...и добавляем ей методы!
    counter.set = function(value) {
        currentCount = value;
    };

    counter.reset = function() {
        currentCount = 0;
    };

    return counter;
}

var counter = makeCounter();


console.log( counter() ); // 1
console.log( counter() ); // 2

counter.reset();
console.log( counter() ); // 1
counter.set(25);
console.log( counter() ); // 26


var MyLibrary = (function() {

    function helper() { console.log("Сработал хелпер") }

    return {
        createMenu: function() { helper() },
        createDialog: function() { console.log("Сработал диалог") }
    };

})();

// использование
MyLibrary.createMenu();
MyLibrary.createDialog();

function sum(a) {
    return function(b){
        return a + b;
    };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));

function filter(arr, fun){
    var result = [];

    return function() {
        for(var i = 0; i < arr.length; i++){
            if (fun(arr[i])) { result += arr[i] };
        }
        return result;
    }();
}

function inBetween(a,b) {
    return function(elem){
        return (elem <= b && elem >= a);
    };
}

function inArray(arr){
    return function(elem){
        return ~arr.indexOf(elem);
    };
}

/* .. ваш код для filter, inBetween, inArray */
var arr = [1, 2, 3, 4, 5, 6, 7];

console.log( filter(arr, function(a) { return a % 2 == 0 }) ); // 2,4,6

console.log( filter(arr, inBetween(3,6)) ); // 3,4,5,6

console.log( filter(arr, inArray([1,2,10])) ); // 1,2

function makeCounter() {
    var currentCount = 0;

    // возвращаемся к функции
    function counter() {
        return ++currentCount;
    }

    // ...и добавляем ей методы!
    counter.set = function(value) {
        currentCount = value;
    };

    counter.reset = function() {
        currentCount = 0;
    };

    return counter;
}

var counter = makeCounter();


//alert( counter() ); // 1
//alert( counter() ); // 2

counter.reset();
//alert( counter() ); // 1



function makeBuffer() {
    var buf = '';
    function buffer(substring){
        return (substring !== undefined) ? buf += substring : buf;
    };
    buffer.clear = function(){
        return buf = '';
    };
    return buffer;
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log( buffer() ); // Замыкания Использовать Нужно!

//Буфер должен преобразовывать все данные к строковому типу:
//Решение не должно использовать глобальные переменные.

var buffer1 = makeBuffer();
buffer1(0); buffer1(1); buffer1(0);

console.log( buffer1() ); // '010'
buffer1.clear();
console.log( buffer1() );



function makeArmy() {

    var shooters = [];
    for(var i=0; i<10; i++) {
        var shooter = (function(x) { // функция-стрелок
        return function(){ console.log(x);} // выводит свой номер
        })(i);
        shooters.push(shooter);
    }

    return shooters;
}


var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[1]();
army[2]();
//army[3]();
//army[4]();
//army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9

//return (function() { // функция-стрелок
//    console.log(shooters[i]); // выводит свой номер
//})()


function makeShout() { // (1)
    var phrase = "Превед!"  // (2)

    var shout = function() {  // (3,4)
        alert(phrase)
    }

    phrase = "Готово!"  // (5)

    return shout
}

shout = makeShout()
// что выдаст?
shout()
