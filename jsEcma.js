/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 4/26/13
 * Time: 11:53 PM
 * To change this template use File | Settings | File Templates.
 */
var result = prompt("Кто пришел?", '');
if (!result) {
    alert("Вход отменён");
}else if (result == "Админ"){
    var password = prompt("Password", '');
    if (!password){
        alert("Вход отменён");
    }
    else if (password == 'Чёрный властелин'){
        alert("Добро пожаловать!")
    }
    else {
        alert("Неверный пароль!")
    }

}
else{
    alert("Я вас не знаю")
}
