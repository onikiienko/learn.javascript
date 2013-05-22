/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/20/13
 * Time: 7:24 PM
 * To change this template use File | Settings | File Templates.
 */
var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
printList(list);
printReverseList(list);
printReverseListNoRec(list);

//Напишите функцию printList(list), которая выводит элементы списка по очереди.

function printList(list) {
    console.log(list.value);
    return (list.next) ? printList(list.next) : '';
}

function printReverseList(list) {

    if (list.next) {
        printReverseList(list.next);
    }

    console.log(list.value);
}

function printReverseListNoRec(list) {
    var tmp = list;
    var tmpValue = [];

    tmpValue.push(tmp.value)

    while(tmp) {
        tmpValue.push(tmp.value)
        tmp = tmp.next;
    }

    var i = tmpValue.length - 1;
    while(i){
        console.log(tmpValue[i]);
        i--;
    }
}
