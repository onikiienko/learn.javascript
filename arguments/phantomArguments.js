/**
 * Created with JetBrains PhpStorm.
 * User: onikienko
 * Date: 6/4/13
 * Time: 11:00 PM
 * To change this template use File | Settings | File Templates.
 */
sum = function(){
    return (!arguments[0])? 0 : (function(list){
        var result = 0;
        for(var i = 0; i < list.length; i++){
            result += list[i];
        }
        return result;
    })(sum.arguments);
}


console.log(sum(1,2,3,4,5));
console.log(sum(6,7,8));


