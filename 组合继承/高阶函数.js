//自定义map方法
var map = Array.prototype.map ? function (a, f) {
    return a.map(f)
} : function (a, f) {
    var results = []
    for (var i = 0, len = a.length; i < len; i++) {
        if (i in a) {
            results[i] = f.call(null, a[i], i, a)  //a[i]为当前项
        }
    }
    return results
}


function final(f) {
    return function (a) {
        return map(a, f)
    }
}

function inCreate(x) {
    return x + 1
}

var inCreate2 = final(inCreate())

inCreate2([1, 2, 3])



