/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/16/13
 * Time: 7:12 PM
 * To change this template use File | Settings | File Templates.
 */

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача — найти непрерывный подмассив arr, сумма элементов которого максимальна.

// Ваша функция должна возвращать только эту сумму.

// Если все элементы отрицательные, то не берём ни одного элемента и считаем сумму равной нулю:



alert("сумма: " + getMaxSubSum([-1, 2, 3, -9]));// = 5 (сумма выделенных)
alert("сумма: " + getMaxSubSum([2, -1, 2, 3, -9]));// = 6
alert("сумма: " + getMaxSubSum([-1, 2, 3, -9, 11]));// = 11
alert("сумма: " + getMaxSubSum([-2, -1, 10000, 100, -1, -2]));// = 10100
alert("сумма: " + getMaxSubSum([100, -9, 2, -3, 5]));// = 100
alert("сумма: " + getMaxSubSum([1, 2, 3]));// = 6 (неотрицательные - берем всех)

alert("сумма: " + getMaxSubSum([-1, -2, -3]));// = 0 (все отрицательные)

function getMaxSubSum(array) {
    var maxSum = 0;

    for(var i = 0; i < array.length / 2; i++) {
        var sumFirst = 0;
        var sumSecond = 0;
        var sum = 0;

        for(var j = i; j < array.length -i; j++) {
            sumFirst += array[j];
            sumSecond += array[array.length - j];
            sum = (sumFirst < sumSecond)? sumSecond : sumFirst;
            if(maxSum < sum) {maxSum = sum}
        }
    }

    return maxSum;
}
