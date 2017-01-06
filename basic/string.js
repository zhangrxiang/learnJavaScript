/**
 * Created by zhang on 2017/1/6.
 */
function print(a){
    // console.log(a);
    console.error(a);
}


var str = "Hello World";
var str2 = "I\'m \"OK\"!";
var str3 = "\x41";
var str4 = "\u4e2d\u6587";

print(str);
print(str2);
print(str3);
print(str4);//中文
print(str4.length);//2
print(str4[0]); //中
print(str4[2]); //undefined

// toUpperCase
print(str.toUpperCase()); //HELLO WORLD

//toLowerCase
print(str.toLocaleLowerCase()); //hello world

// indexOf  会搜索指定字符串出现的位置：
print(str.indexOf("World")); //6
print(str.indexOf("World2")); //-1

// substring  返回指定索引区间的子串
print(str.substr(1,3)); //ell
print(str.substr(1)); //ello World

// charAt
print(str.charAt(2)); //l

// concat
print(str.concat(str2)); //Hello WorldI'm "OK"!

print(str.fontcolor("red")); //<font color="red">Hello World</font>

print(str.big());

print(str.lastIndexOf('l'));

print(str.link("http：//www.baidu.com")); //<a href="http：//www.baidu.com">Hello World</a>

print(str.slice(1,3));

print(str.valueOf());

print(str.sup())

print(str.italics())