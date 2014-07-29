var browser = prompt("Ваш браузер", "");
(browser=="IE")?alert('О, да у вас ИЕ!'):
    (browser=="chrome"||browser=="firefox"||browser=="safari"||browser=="opera")?alert('Да, и эти браузеры мы поддержаваем'):
       alert('Мы надеемся, что и в вашем браузере все ок!');

var a = prompt('a?','');

switch(a){
    case '0':
        alert('0');
        break;
    case '1':
        alert('1');
        break;
    case '2':
    case '3':
        alert('2,3');
}