/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/22/13
 * Time: 6:34 PM
 * To change this template use File | Settings | File Templates.
 */
//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
//Временная зона — местная. Выведите его на экран.
var d = new Date(2012, 1, 20, 3, 12);
console.log(d);

var date = new Date();


console.log( date.getHours() ); // час в вашей зоне для даты date
console.log( date.getUTCHours() , new Date().getTimezoneOffset()); // час в зоне GMT+0 для даты date


//Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате ‘пн’, ‘вт’, … ‘вс’.

var date = new Date(2012,0,3);  // 3 января 2012
console.log( getWeekDay(date) );      // Должно вывести 'вт'

function getWeekDay(date) {
    var day = date.getDay();
   return (day == 0) ? "вс" : (day == 1) ? "пн" : (day == 2) ? "вт" : (day == 3) ? "ср" : (day == 4) ? "чт" : (day == 5) ? "пт" : "сб";
}


//Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
var date = new Date(2012, 0, 3);  // 3 янв 2012
console.log( getLocalDay(date) );      // вторник, выведет 2

function getLocalDay(date) {
    var v = date.getDay();
    return (v == 0) ? 7 : v;
}

