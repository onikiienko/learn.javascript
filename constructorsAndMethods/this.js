/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 6/4/13
 * Time: 11:33 PM
 * To change this template use File | Settings | File Templates.
 */
var calculator = {
    readValues : function() {
        this.firstNumber = +prompt('первое','');
        this.secondNumber = +prompt('второе','');
    },
    sum : function() {
        return this.firstNumber + this.secondNumber;
    },
    mul : function() {
        return this.firstNumber * this.secondNumber;
    }
};

calculator.readValues();
console.log(calculator.sum());
console.log(calculator.mul());
