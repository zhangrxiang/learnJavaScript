/**
 * Created by zhangrxiang on 2017/1/9 19:39.
 * Location Wuxi
 */

function print(a) {
    console.log(a)
}
var pi=3.14;    // 使用小数点
print(pi);
var x=34;       // 不使用小数点
print(x);
// 极大或极小的数字可通过科学（指数）计数法来写：
var y=123e5;    // 12300000
print(y);
var z=123e-5;   // 0.00123
print(z);
// 所有 JavaScript 数字均为 64 位
var s = typeof 1;
print(s);
var sum = 0.2 + 0.1;
// 0.30000000000000004
print(sum);

// 八进制和十六进制
y = 0377;
z = 0xFF;
print(y);
print(z);


var myNumber=128;
print(myNumber.toString(16));   // 返回 80
print(myNumber.toString(8));    // 返回 200
print(myNumber.toString(2));    // 返回 10000000

myNumber=2;
while (myNumber!=Infinity) {
    myNumber=myNumber*myNumber; // 重复计算直到 myNumber 等于 Infinity
}
print(myNumber);

// NaN - 非数字值
x = 1000 / "Apple";
print(isNaN(x)); // 返回 true
y = 100 / "1000";
print(isNaN(y)); // 返回 false

// 数字可以是数字或者对象
x = 123;
y = new Number(123);
z =  Number(123);
print(typeof(x)); // 返回 Number
print(typeof(y)); // 返回 Object
print(typeof(z)); // 返回 Number


// MAX_VALUE
// MIN_VALUE
// NEGATIVE_INFINITY
// POSITIVE_INFINITY
// NaN
// prototype
// constructor

// toExponential()
// toFixed()
// toPrecision()
// toString()
// valueOf()

var s2 = z.toExponential();
// 1.23e+2
print(s2);
var s3 = z.toFixed(1);
// 123.0
print(s3);
var s4 = z.toPrecision(1);
// 1.2e+2
print(s4);
print(z.toPrecision(2));
print(z.toPrecision(3));

var number = z.valueOf();
print(number);
