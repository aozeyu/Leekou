var reg = /\d+?/g;
var str = "Zhufeng2015huiWang2014"

var ary = str.match(reg)
console.log(ary)


var str2 = "my name is {0},my age is {1},i come from {2},i love {3}~~"

var arr = ["疑问",28,"湖南"]

var reg2 = /{(\d+)}/g

console.log(reg2.exec(str2))