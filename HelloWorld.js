/**
 * Created by zhang on 2017/1/5.
 */

function print(a){
    // console.log(a);
    console.error(a);
}
// 数据类型
var i = 123; // 整数123
var f = 0.456; // 浮点数0.456
var d = 1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5
var a = -99; // 负数
var nan = NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
var limit = Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity
var x = 0xff00;
print(i);
print(f);
print(d);
print(a);
print(nan);
print(limit);
print(x);
print(0xa5b4c3d2);
print(2/0); //Infinity
print(0 / 0); //NaN


// 字符串
print("zing");

// 布尔值
print(true); // 这是一个true值
print(false); // 这是一个false值
print(2 > 1); // 这是一个true值
print(2 >= 3); // 这是一个false值

// 第一种是==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
// 第二种是===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。
print(NaN === NaN); // false

print(isNaN(NaN));//true

print(1 / 3);
print(1 - 2 / 3);
print(1 / 3 === (1 - 2 / 3)); // false

print(Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001); // true


// null和undefined

// null表示一个“空”的值，它和0以及空字符串''不同，0是一个数值，''表示长度为0的字符串，而null表示“空”。
// undefined表示值未定义

var arr = [1, 2, 3.14, 'Hello', null, true];
print(arr);

//noinspection JSDuplicatedDeclaration
for (var i = 0; i < arr.length; i++){
    print(arr[i]);
}
// new Array(11,22,33,44)
var arr2 = [11,22,33,44];
print(arr2);

// 对象
var zing = {
    name: 'zing',
    age: 22,
    tags: ['js', 'web', 'mobile','php','java','scala','python'],
    city: 'Wuxi',
    hasCar: false,
    zipcode: null
};

print(zing);
print(zing.tags);
for(i in zing){
    print(zing[i])
}

// strict模式
"use strict";
