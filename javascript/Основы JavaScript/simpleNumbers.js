/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 4/29/13
 * Time: 10:52 PM
 * To change this template use File | Settings | File Templates.
 */
outer:
for(var i = 2; i < 10; i++){
    for(var j = 2; j < i - 1; j++){
        if (i%j==0) continue outer;
    }
    alert(i);
}

