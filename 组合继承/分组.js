console.log(/^\d{4}(-\d{2}){2}$/.test("1982-02-05"))
console.log("18610927890".replace(/^(\d{3})(\d{4})(\d{4})$/, "$1****$3"))
var str = "<ul><li><li></li></li></ul>"

console.log(str.replace(/(<\/?)(\w+?)>/g, "$1div>"))
console.log("abAc".match(/[aA](?=c)/g))
console.log("abAc".match(/[aA](?!c)/g))
