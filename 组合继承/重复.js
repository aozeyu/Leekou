console.log("aabbccdd".match(/[ac]{2}/g))

console.log("1982-10-20".match(/\d{4}-\d{2}-\d{2}/))

console.log("acaacaaacc".match(/[ac]{2}/g))

console.log("a{2}".match(/a\{2\}/g))
console.log("a{2}".match(/a[{}]/g))

console.log("aaaaaaaaaaa".match(/a{2,4}/g))

console.log("minute".match(/minutes{0,1}/))
console.log("aaaaa".match(/a{3,}/))
console.log("aaaaa".match(/a{1,}/))
console.log("aa".match(/a{0,}/g))
console.log("abcdef".match(/.?/g))  //?最多1次,那就意味着只能找到一个字符