/**
 * Created by zhangrxiang on 2017/1/9 19:57.
 * Location Wuxi
 */

function print(a) {
    console.log(a)
}
var today = new Date();
var d1 = new Date("October 13, 1975 11:13:00");
var d2 = new Date(79,5,24);
var d3 = new Date(79,5,24,11,33,0);
print(today);
print(d1);
print(d2);
print(d3);


var fullYear = today.getFullYear();
print(fullYear);
var time = today.getTime();
print(time/3600/24/365/1000 + 1970);

