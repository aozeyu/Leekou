const target = {
    id: 'target'
};
const handler = {};
const proxy = new Proxy(target, handler);
// id 属性会访问同一个值
console.log(target.id); // target
console.log(proxy.id); // target

/*使用 new 关键字和 Map 构造函数可以创建一个空映射：
const m = new Map();
如果想在创建的同时初始化实例，可以给 Map 构造函数传入一个可迭代对象，需要包含键/值对数
组。可迭代对象中的每个键/值对都会按照迭代顺序插入到新映射实例中：*/
// 使用嵌套数组初始化映射
const m1 = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"]
]);
console.log((m1.size)); // 3


// 映射期待的键/值对，无论是否提供
const m3 = new Map([[]]);
console.log((m3.has(undefined))); // true
console.log((m3.get(undefined))); // undefined

/*与严格相等一样，在映射中用作键和值的对象及其他“集合”类型，在自己的内容或属性被修改时
仍然保持不变：*/
const m = new Map();
const objKey = {},
    objVal = {},
    arrKey = [],
    arrVal = [];
m.set(objKey, objVal);
m.set(arrKey, arrVal);
objKey.foo = "foo";
objVal.bar = "bar";
arrKey.push("foo");
arrVal.push("bar");
console.log(m.get(objKey)); // {bar: "bar
console.log(m.get(arrKey)); // ["bar"]