/**
 * Created by zhangrxiang on 2017/1/8 17:12.
 * Location Wuxi
 */

function print(a) {
    console.error(a)
}

// JavaScript的对象是一种无序的集合数据类型，它由若干键值对组成。

// 布尔型可以是一个对象。
// 数字型可以是一个对象。
// 字符串也可以是一个对象
// 日期是一个对象
// 数学和正则表达式也是对象
// 数组是一个对象
// 甚至函数也可以是对象


// 访问对象的属性
// 属性是与对象相关的值。
// objectName.propertyName
// var message="Hello World!";
// var x=message.length;
// 访问对象的方法
// 方法是能够在对象上执行的动作。
// 您可以通过以下语法来调用方法：
// objectName.methodName()
// var message="Hello world!";
// var x=message.toUpperCase();

var zing = {
    name: 'zhangrxiang',
    birth: 1994,
    school: 'wuxi',
    height: 1.75,
    weight: 65,
    score: null
};

for(var o in zing){
    print(o + " : " + zing[o]);
}
print(zing.name);

if("name" in zing) {
    print(true)
}

// 属性不一定是zing的，它可能是zing继承得到的：

print(zing.hasOwnProperty("name"));

var person={};
person.firstname="zing";
person.lastname="zhang";
person.age=22;
person.eyecolor="block";

for(var p in person){
    print(p + " : " + person[p]);
}


// 使用对象构造器

function Person(firstname,lastname,age,eyecolor) {

    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;

    function changeName(name)
    {
        this.lastname=name;
    }
}

var myFather=new Person("John","Doe",50,"blue");
var myMother=new Person("Sally","Rally",48,"green");

for(var f in myFather){
    print(f + " : " + myFather[f]);
}
for(var m in myMother){
    print(m + " : " + myMother[m]);
}