
//Объясните, для чего предназначена и каким образом работает следующая функция:

/*
Возвращает функцию, которая берёт первый элемент псевдомассива args и объеденяет его с массивом Array, к которому применили метод 
*/

function bind(method, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    return function() {
        var a = args.concat(Array.prototype.slice.call(arguments, 0));
        return method.apply(context, a);
    }
}