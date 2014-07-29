/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/14/13
 * Time: 6:18 PM
 * To change this template use File | Settings | File Templates.
 */
var bar = ['whiskey', 'beer', 'vodka'];

bar[bar.length] = 'vine';

//alert( bar[bar.length - 1] );

var styles = ['Jazz', 'Blues'];

styles.push( 'Rock\'n\'Roll' );
styles[styles.length - 2] = 'Classic';
//alert( styles.shift() );
styles.unshift('RAP', 'Raggea');
//alert( styles );

//Напишите код для вывода alert случайного значения из массива:\
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var min = 0;
var max = arr.length - 1;

var rand = min + Math.floor( Math.random() * (max+1-min) );
//alert(arr[rand]);

//Напишите код, который:

// -Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// -Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// -Выводит сумму всех значений массива

alert(summing(fillingData()));

function fillingData(){
    var arr = [];
    do{
        arr.push(prompt("Дальше", "")) ;
        if (!+arr[arr.length - 1]) break;
    }while(true)
    arr.pop();
    return arr;
}

function summing(arr){
    var result = 0;
    for(var i = 0; i < arr.length; i++){
        result += +arr[i];
    }
    return result;
}

