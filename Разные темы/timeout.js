i = 1;
setTimeout(function f(){
    if(i < 21){
        //console.log(i++);
//        return setTimeout(f,100);
    }
    return;
}, 100);



function f(x) {
    alert(x);
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 4000);

//f1000("тест"); // выведет "тест" через 1000 миллисекунд
//f1500("тест2"); // выведет "тест2" через 1500 миллисекунд

function delay(fun, delta){
    return function(){
        var a = arguments[0];
        setTimeout(function(){fun(a)}, delta);
    }
}




function debounce(f, ms) {
    return function(){
        var a = arguments[0];
        var time = setTimeout(function(){f(a)}, ms);
}
}


/* Тест должен выводить 14 */
function test() {
    var log = '';
    function f(a) { log += a; }

    f = debounce(f, 1000);

    f(1); // выполнится сразу же
    f(2); // игнор

    setTimeout(function() { f(3) }, 100); // игнор (рановато)
    setTimeout(function() { f(4) }, 1100); // выполнится (таймаут прошёл)
    setTimeout(function() { f(5) }, 1500); // игнор

    setTimeout(function() { alert(log) }, 2000); // 14

}

test();

