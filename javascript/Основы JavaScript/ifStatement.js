/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 4/28/13
 * Time: 10:05 PM
 * To change this template use File | Settings | File Templates.
 */
var message;
message = (login = "Вася") ? "Привет" :
    message = (login = "Директор") ? "Здравствуйте" :
        message = (login = "") ? "Нет логина" : "";