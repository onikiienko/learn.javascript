/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/15/13
 * Time: 7:51 PM
 * To change this template use File | Settings | File Templates.
 */

alert("сумма: " + getMaxSubSum([-1, 2, 3, -9]));// = 5 (сумма выделенных)
alert("сумма: " + getMaxSubSum([2, -1, 2, 3, -9]));// = 6
alert("сумма: " + getMaxSubSum([-1, 2, 3, -9, 11]));// = 11
alert("сумма: " + getMaxSubSum([-2, -1, 1, 2]));// = 3
alert("сумма: " + getMaxSubSum([100, -9, 2, -3, 5]));// = 100
alert("сумма: " + getMaxSubSum([1, 2, 3]));// = 6 (неотрицательные - берем всех)

function getMaxSubSum(array) {
    var maxSum = 0;

    for(var i = 0; i < array.length; i++) {
        var sum = 0;
        for(var j = i; j < array.length; j++) {
            sum += array[j];
            if(maxSum < sum) {maxSum = sum}
        }
    }

    return (maxSum <= 0)? 0 : maxSum;
}
