/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/18/13
 * Time: 3:52 PM
 * To change this template use File | Settings | File Templates.
 */
var names = 'Маша, Петя, Марина, Василий';

var arr = names.split(', ', 2);

for (var i=0; i<arr.length; i++) {
  //  alert('Вам сообщение ' + arr[i]);
}

//JPOIN


var arr = ['Маша', 'Петя', 'Марина', 'Василий'];

var str = arr.join(';');

//alert(str); // Маша;Петя;Марина;Василий

//alert( new Array(4).join("ля") ); // ляляля


//В объекте есть свойство className, которое содержит список «классов» - слов, разделенных пробелом:
// P.S. Ваша функция не должна добавлять лишних пробелов.

var obj = {
    className: 'open open open menu open'
}

addClass(obj, 'me'); // obj.className='open menu new me'
addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open');  // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

//console.log(obj.className);

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)


//console.log(obj.className);

function addClass(obj, cls){
    var classes = obj.className ? obj.className.split(' ') : [];

    for (i = 0; i < classes.length; i++) {
        if (cls == classes[i]) return;
    }
    classes.push(cls);
    obj.className = classes.join(' ');
}

function removeClass(obj, cls){
    var classes = obj.className ? obj.className.split(' ') : [];

    for (i = 0; i < classes.length; i++) {
        if (cls == classes[i]) {
         classes.splice(i, 1);
         i--;
        }
    }
    obj.className = classes.join(' ');
}

//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//То есть, дефисы удаляются, а все слова после них получают заглавную букву.

//console.log(camelize("background-color") == 'backgroundColor');
//console.log(camelize("list-style-image") == 'listStyleImage');
//console.log(camelize("") == '');

function camelize(str){
    var buffer = str.split('-');

    for (var i = 1; i < buffer.length; i++){
        buffer[i] = buffer[i].charAt(0).toUpperCase() + buffer[i].slice(1);
    }

    return buffer.join('');
}
//Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и удаляет из него все числа вне диапазона a..b.

var arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

//console.log(arr); // массив изменился: остались [3, 1]

function filterRangeInPlace(arr, from, to) {
    for (var i = 0; i < arr.length; i++) {
        if (from > arr[i] || arr[i] > to) {
            arr.splice(i--,1);
        }
    }
}

// Внутренняя реализация метода arr.sort(fn) умеет сортировать любые массивы, если указать функцию fn от двух элементов, которая умеет сравнивать их.

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

var arr = [ 1, 2, 15 ];


arr.sort(compareNumeric);


//console.log(arr);  // 1, 2, 15

//Кстати, те значения, с которыми sort вызывает функцию сравнения, можно увидеть, если вставить в неё alert:
[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  //  console.log(a + " <> " + b);
});

//Как отсортировать массив чисел в обратном порядке?

var arr = [ 5, 2, 1, -10, 8];

// отсортируйте?
//console.log(arr.sort(backDirraction));

function backDirraction(a, b) {

    return -(a - b);
}

// Есть массив строк arr. Создайте массив arrSorted — из тех же элементов, но отсортированный.

// Исходный массив не должен меняться.

// Постарайтесь сделать код как можно короче.

var arr = [ "HTML", "JavaScript", "CSS" ];

var arrSorted = arr.slice().sort();

//console.log(arrSorted);  // CSS, HTML, JavaScript
//console.log(arr); // HTML, JavaScript, CSS (без изменений)



var arr = [1, 2, 3, 4, 5];



function randomizer() {
    return Math.round(Math.random() - Math.random());
}

// элементы в случайном порядке, например [3,5,1,2,4]
//console.log(arr.sort(randomizer));


//Напишите код, который отсортирует массив объектов people по полю age.

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];
var ages = [];

sortingPeople(people);
// теперь people: [vovochka, masha, vasya]
for(i = 0; i < people.length; i++) {
    console.log(people[i].name) // 6, 18, 23
}

function sortingPeople(listOfPeople) {
    var listOfAges = getPeopleAges(listOfPeople);
    ages.sort(numericSort);
    var sortedPeople = [];

    for (i = 0; i < listOfAges.length; i++) {
        for (var j = 0; j < listOfPeople.length; j++) {
            if (listOfAges[i] == listOfPeople[j].age) {
                sortedPeople.push(listOfPeople[j])
            }
        }
    }

    return people = sortedPeople;
}

function getPeopleAges(listOfPeople) {
    for (i = 0; i < listOfPeople.length; i++) {
        ages.push(listOfPeople[i].age);
    }
    return ages;
}


function numericSort(a, b) {
    return a - b;
}

// Наша функция сравнения
function compareAge(personA, personB) {
    return personA.age - personB.age;
}

// проверка
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareAge);

// вывести
for(var i=0; i<people.length; i++) {
    console.log(people[i].name); // Вовочка Маша Вася
}

