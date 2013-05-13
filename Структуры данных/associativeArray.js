/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/13/13
 * Time: 7:40 PM
 * To change this template use File | Settings | File Templates.
 */

//Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:

// до вызова
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

alert( menu.toSource() );

multiplyNumeric(menu);

alert( menu.toSource() );

function multiplyNumeric(menu){
    for(var key in menu){
        console.log(key);
        console.log(menu[key]);
        if(isNumeric(menu[key])){
            menu[key] *= 2;
        }
    }
    //return menu;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//Пустой объект («пустой шкаф») может быть создан одним из двух синтаксисов:
o = new Object();
o = {};   // пустые фигурные скобки

var person = {};

// 1. присвоение
// при присвоении свойства в объекте автоматически создаётся "ящик"
// с именем "name" и в него записывается содержимое 'Вася'
person.name = 'Вася';

person.age = 25;  // запишем ещё одно свойство: с именем 'age' и значением 25

// 2. чтение
alert(person.name + ': ' + person.age); // вывести значения

// 3. удаление
delete person.name; // удалить "ящик" с именем "name" вместе со значением в нём

// 4. Проверка существования свойства с определенным ключом.
if ("age" in person) {
    alert("Свойство age существует!");
}

var person = { name: "Василий" };

alert(person.lalala === undefined); // true, свойства нет
alert(person.name === undefined); // false, свойство есть.

// Существует альтернативный синтаксис работы со свойствами, использующий квадратные скобки объект['свойство']:
var person = {};

person['name'] = 'Вася'; // то же что и person.name

alert(person['name']);

delete person['name'];

var person = { age: 25 };
var key = 'age';

alert(person[key]);  // выведет person['age']

var menuSetup = {
    width:  300,
    height: 200,
    title: "Menu"
};

// то же самое, что:

var menuSetup = {};
menuSetup.width = 300;
menuSetup.height = 200;
menuSetup.title = 'Menu';

var menuSetup = {
    width:  300,
    'height': 200,
    "мама мыла раму": true
};

var user = {};

user.name = 'Вася';
user.surname = 'Петров';
user.name = 'Сергей';
alert(user.name + user.surname);
delete user.name;

var user = {
    name: "Vasja",
    surname: 'Petrov'
};
delete user['name'];
alert(user.name + user.surname);

var user = {
    name:  "Таня",
    age: 25,

    size: {
        top: 90,
        middle: 60,
        bottom: 90
    }

}

//alert( user.toSource() );

// Перебор свойств и значений
var menu = {
    width:  300,
    height: 200,
    title: "Menu"
};

for (var key in menu) {
    // этот код будет вызван для каждого свойства объекта
    // ..и выведет имя свойства и его значение

    alert("Ключ: " + key + " значение:" + menu[key]);

}

//Так как объект всего один, то в какой бы переменной его не меняли — это отражается на других:
var user = { name: 'Вася' };

var admin = user;

admin.name = 'Петя'; // поменяли данные через admin

alert(user.name); // 'Петя', изменения видны в user

//«Настоящее» копирование объекта

var user = { name: 'Вася' }; // user - ссылка на объект

var admin = clone(user);

admin.name = 'Петя'; // поменяли данные в admin
alert(user.name); // 'Вася'

function clone(obj) {
    var obj2 = {};

    // если свойства могут быть объектами, то нужно перебирать и их
    for(var key in obj) obj2[key] = obj[key];

    return obj2;
}


