var jsPerson1 = {
    name:"王小波",
    age:48,
    writeJs:function () {
        console.log("my name is" + this.name+", i can write js")
    }
}
jsPerson1.writeJs()

var jsPerson2 = {
    name:"姚泽宇",
    age:18,
    writeJs:function () {
        console.log("my name is" + this.name+", i can write js")
    }
}
jsPerson2.writeJs()


function creteJsPerson(name,age) {
    var obj = {}
    obj.name = name;
    obj.age = age;
    obj.writeJs=function () {
        console.log("my name is" + this.name+", i can write js")
    }
    return obj
}

var p1 = creteJsPerson("姚爱明",48)
var p2 = creteJsPerson("姚明",28)
p1.writeJs()
p2.writeJs()

