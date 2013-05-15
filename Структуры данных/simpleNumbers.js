/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 5/15/13
 * Time: 6:35 PM
 * To change this template use File | Settings | File Templates.
 */

giveSimpleNumbers(120);

function giveSimpleNumbers(amount){
    var list = makeList(amount);
    var newList = [];
    var i = 0;

    function revovingNumbers() {
        var newNewList = [];
        for (x = 0; x < newList.length; i++) {
            if (z * j != newList[x])newNewList.push(newList[x])
        }
        newList = newNewList;
        return newNewList;
    }

    do{
        var p = newList[i];
        do{
            j = 0;
            var z = 2;
            do{
                var newNewList = revovingNumbers();
                z++;
            }while(z * j < newList[newList.length])
            j++;
        }while(j * p <= newList[newList.length])
        i++;
    }while(p * p < newList.length)
    alert(newNewList);
}


function makeList(amount){
    var list = [];
    for(var i = 2; i <= amount; i++){
        list.push(i);
    }
    return list;
}