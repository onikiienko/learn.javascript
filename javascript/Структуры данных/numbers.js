/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/12/13
 * Time: 11:09 PM
 * To change this template use File | Settings | File Templates.
 */

//Напишите код для генерации случайного значения в диапазоне от 0 до max, не включая max.
function randomMax(n){
    return Math.random() * n;
}

//Напишите код для генерации случайного числа от min до max, не включая max.
function randomMaxMin(n,m){
    return n + Math.random() * (m - n);
}

//Напишите код для генерации случайного целого числа между min и max, включая min,max как возможные значения.
//Любое число из интервала min..max должно иметь одинаковую вероятность.
function randomMaxMin(n,m){
    return n + Math.round(Math.random() * m) - Math.round(Math.random() * n);
}

var n = prompt("Назови мне число", "");

alert( fibOld(n) );
alert( fibNew(n) );

function fibOld(n){
    var a=1, b=0, x;
    for(i=0; i<n; i++) {
        x = a+b;
        a = b
        b = x;
    }
    return b;
}//5527939700884757

function fibNew(n){
    return Math.round( Math.pow( (1 + (Math.sqrt(5))) / 2, n) / Math.sqrt(5) );
}//5527939700884755


alert( getDecimal(12.5) ); // 0.5
alert( getDecimal(6.25) ); // 0.25
alert( getDecimalSecondVariant(12.5) ); // 0.5
alert( getDecimalSecondVariant(6.25) ); // 0.25

function getDecimal(number){
    return +(number-parseInt(number)).toFixed(6);
}

function getDecimalSecondVariant(num) {
    return +(num % 1).toFixed(6);
}


alert( +(0.1 + 0.2).toFixed(5) + '$' );
alert( 6.35.toFixed(20) );

//Если нам нужно именно число, то мы можем получить его, применив '+' к результату n.toFixed(..):
var n = 12.34;
alert( +n.toFixed(5) ); // 12.34

//num.toFixed(precision). округляет число num до точности precision и возвращает результат в виде строки
var n = 12.34;
alert( n.toFixed(1) ); // "12.3"
alert( n.toFixed(5) ); // "12.34000", добавлены нули до 5 знаков после запятой


//Округление до заданной точности
var n = 3.456;
alert( Math.round( n * 100 ) / 100 );  // 3.456 -> 345.6 -> 346 -> 3.46

//Округление
alert( Math.floor(3.1) );  // Округляет вниз 3
alert( Math.ceil(3.1) );   // Округляет вверх 4
alert( Math.round(3.1) );  // Округляет до ближайшего целого 3

//Округление битовыми операторами
alert( ~~12.3 );  // 12
alert( 12.3 ^ 0 );  // 12
alert( 1.2 + 1.3 ^ 0); // 2, приоритет ^ меньше, чем +


//Проверка на число для всех типов
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//Создайте страницу, которая предлагает ввести два числа и выводит их сумму.
var firstNumber = +prompt("Введите первое число", "");
var secondNumber = +prompt("Введите второе число", "");
alert( plusingNumbers(firstNumber, secondNumber) );

function plusingNumbers(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

alert( 0xFF ); // 255 в шестнадцатиричной системе
alert( 010 ); // 8 в восьмеричной системе

// еще пример научной формы: 3 с 5 нулями
alert( 3e5 );  // 300000

// здесь 3 сдвинуто 5 раз вправо, за десятичную точку.
alert( 3e-5 ); // 0.00003  <-- 5 нулей, включая начальный ноль

alert(1/0);  // Infinity
alert(12345/0); // Infinity
alert( -1 / 0 ); // -Infinity
alert( 1e500 ); // Infinity

var n = 0/0;

alert( isNaN(n) ); // true


if (NaN == NaN) alert("=="); // Ни один вызов
if (NaN === NaN) alert("==="); // не сработает

//Ещё один забавный способ проверки значения на NaN — это проверить его на равенство самому себе, вот так:
var n = 0/0;

if (n !== n) alert('n = NaN!');

//Функция isFinite(n) возвращает true только тогда, когда n — обычное число, а не одно из этих значений:
alert( isFinite(1) ); // true
alert( isFinite(Infinity) ); // false
alert( isFinite(NaN) ); // false

//Преобразование к числу
var s = "12.34";
alert( +s );  // 12.34
alert( +"12test" );  //Строгое — означает, что если строка не является в точности числом, то результат будет NaN:
alert( +"  -12");  // -12
alert( +" \n34  \n"); // 34, перевод строки \n является пробельным символом
alert( +"" ); // 0, пустая строка становится нулем
alert( +"1 2" ); // NaN, пробел посередине числа - ошибка
alert( '12.34' / "-2" );  // -6.17











