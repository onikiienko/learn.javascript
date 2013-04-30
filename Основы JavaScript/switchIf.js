var browser = prompt("Ваш браузер", "");
if (browser=="IE"){
    alert('О, да у вас ИЕ!');
    break;
}else if (browser=="chrome"||"firefox"||"Safari"||"opera"){
    alert('Да, и эти браузеры мы поддержаваем');
    break;
} else{
    alert('Мы надеемся, что и в вашем браузере все ок!');
}