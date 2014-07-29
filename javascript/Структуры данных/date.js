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
//console.log(d);

var date = new Date();


//console.log( date.getHours() ); // час в вашей зоне для даты date
//console.log( date.getUTCHours() , new Date().getTimezoneOffset()); // час в зоне GMT+0 для даты date


//Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате ‘пн’, ‘вт’, … ‘вс’.

var date = new Date;  // 3 января 2012
date.setDate(-100);
//console.log( getWeekDay(date) );      // Должно вывести 'вт'

function getWeekDay(date) {
    var day = date.getDay();
   return (day == 0) ? "вс" : (day == 1) ? "пн" : (day == 2) ? "вт" : (day == 3) ? "ср" : (day == 4) ? "чт" : (day == 5) ? "пт" : "сб";
}


//Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
var date = new Date;  // 3 янв 2012
//console.log( date );      // вторник, выведет 2
//console.log( getLocalDay(date) );      // вторник, выведет 2

function getLocalDay(date) {
    var v = date.getDay();
    return (v == 0) ? 7 : v;
}


var today = new Date;

today.setHours(0);
//console.log( today ); // сегодня, но час изменён на 0

today.setHours(0, 0, 0, 0);
//console.log(today ); // сегодня, ровно 00:00:00.


//console.log(getLastDayInMonth(2012, 1)); // 29 (високосный год, февраль).

function getLastDayInMonth(year, month) {
    var d = new Date(year, month + 1, 0);
    return d;
}

/*Напишите код, который выводит:

    Сколько секунд прошло с начала сегодняшнего дня.
    Сколько осталось до конца дня.
    Скрипт должен работать в любой день, т.е. в нём не должно быть конкретного значения сегодняшней даты.
*/

//console.log(getTimeFromSunRise());
//console.log(getTimeBeforeSunSet());

function getTimeFromSunRise() {
    var date = new Date;
    return date.getMilliseconds() + 1000 * ( date.getSeconds() + 60 * ( date.getMinutes() + date.getHours() * 60 ) );
}

function getTimeBeforeSunSet() {
    return 86400000 - getTimeFromSunRise();
}

var now = new Date();

// создать объект из текущей даты, без часов-минут-секунд
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

var diff = now - today; // разница в миллисекундах
//console.log( Math.round(diff / 1000) ); // перевести в секунды

// Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:
// P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2011 должно быть 01.01.11, а не 1.1.11.

var d = new Date(2001, 0, 30); // 30 января 2011
//console.log( formatDate(d) ); // '30.01.11'

function formatDate(d) {
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    year = year % 100;
    if (year < 10) {
        year = '0' + year;
    }
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

    return day + '.' + month + '.' + year;
}

/*
Напишите функцию formatDate(date), которая форматирует дату date так:

    Если со времени date прошло менее секунды, то возвращает "только что".
    Иначе если со времени date прошло менее минуты, то "n сек. назад".
    Иначе если прошло меньше часа, то "m мин. назад".
    Иначе полная дата в формате "дд.мм.гг чч:мм".
*/


console.log( formatDate( new Date(new Date - 1) ) ); // "только что"

console.log( formatDate( new Date(new Date - 30*1000) ) ); // "30 сек. назад"

console.log( formatDate( new Date(new Date- 5*60*1000) ) ); // "5 мин. назад"

console.log( formatDate( new Date(new Date - 86400*1000) ) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"

function formatDate(date) {
    var diff = new Date() - date; // разница в миллисекундах

    if (diff < 1000) { // прошло менее 1 секунды
        return 'только что';
    }

    var sec = Math.floor( diff / 1000 ); // округлить diff до секунд

    if (sec < 60) {
        return sec + ' сек. назад';
    }

    var min = Math.floor( diff / 60000 ); // округлить diff до минут
    if (min < 60) {
        return min + ' мин. назад';
    }

    // форматировать дату, с учетом того, что месяцы начинаются с 0
    var d = date;
    d = ['0'+d.getDate(),'0'+(d.getMonth()+1),''+d.getFullYear(), '0'+d.getHours(),'0'+d.getMinutes() ];
    for(var i=0; i<d.length; i++) {
        d[i] = d[i].slice(-2);
    }

    return d.slice(0,3).join('.')+' '+d.slice(3).join(':');
}

//console.log( "" + 1 + 0, "" - 1 + 0, true + false, 6 / "3", "2" * "3", 4 + 5 + "px", "$" + 4 + 5 , "4" - 2 , "4px" - 2 , 7 / 0 , parseInt("09") , "  -9\n" + 5, "  -9\n" - 5, 5 && 2 && 123 , 2 && 5 , 5 || 0 , 0 || 5, null + 1, undefined + 1);