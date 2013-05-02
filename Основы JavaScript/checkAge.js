/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/1/13
 * Time: 3:33 PM
 * To change this template use File | Settings | File Templates.
 */
var Age = prompt("Сколько лет?","");
checkAge(Age);
function checkAge(Age) {
    return (Age>18)?true:confirm("Родители разрешили?");
}
