import _ from 'underscore';

var la_testArr = new Array(10);


for(var i = 0;i< la_testArr.length;i++){
    la_testArr[i] = {id:0, name: ''};
}

_.each(la_testArr, function (lo_testArr, index) {
    lo_testArr.id = index + 1;
    lo_testArr.name = 'Name' + (index+1);
});

console.log(la_testArr);
