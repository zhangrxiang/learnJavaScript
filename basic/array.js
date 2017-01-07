/**
 * Created by zhangrxiang on 2017/1/8 0:28.
 */

function print(a){
    console.error(a);
}

var arr = [1, 2, 3.14, 'Hello', null, true];

//6
print("length : "+arr.length);
// [ 1, 2, 3.14, 'Hello', null, true ]
print(arr);
//直接给Array的length赋一个新的值会导致Array大小的变化
arr.length = 10;
// [ 1, 2, 3.14, 'Hello', null, true, , , ,  ]
print(arr);
arr[0] = "zing";
// [ 'zing', 2, 3.14, 'Hello', null, true, , , ,  ]
print(arr);

// indexOf
print(arr.indexOf("zing")); // 元素10的索引为0
print(arr.indexOf(2)); // 元素20的索引为1
print(arr.indexOf(30)); // 元素30没有找到，返回-1
print(arr.indexOf('Hello')); // 元素'Hello'的索引为3

// slice 包括开始索引，不包括结束索引。
arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
print(arr);
print(arr.slice(0, 3)); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
print(arr.slice(3)); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
var copy = arr.slice();
// [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
print(copy);
// false
print(copy === arr);

// push 末尾添加若干元素
print(arr.push('A', 'B')); // 返回Array新的长度 9
// [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B' ]
print(arr);

// pop()则把Array的最后一个元素删除
print(arr.pop()); // pop()返回'B'
// 空数组继续pop不会报错，而是返回undefined

// Array的头部添加若干元素，使用unshift()方法
print(arr.unshift('A', 'B')); // 返回Array新的长度:10

// shift()方法则把Array的第一个元素删掉：
// print(arr);//[ 'A', 'B', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A' ]
print(arr.shift()); //A
print(arr.shift()); //B
// print(arr);//[ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A' ]

// sort
// [ 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
print(arr.sort());

// reverse
// [ 'G', 'F', 'E', 'D', 'C', 'B', 'A', 'A' ]
print(arr.reverse())

// splice
// 从指定的索引开始删除若干元素，然后再从该位置添加若干元素
arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
print(arr.splice(2, 3, 'Google', 'Facebook')); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
print(arr); // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
print(arr.splice(2, 2)); // ['Google', 'Facebook']
print(arr); // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
print(arr.splice(2, 0, 'Google', 'Facebook')); // 返回[],因为没有删除任何元素
print(arr); // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

// concat
arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
print(added); // ['A', 'B', 'C', 1, 2, 3]
added = added.concat([null],[undefined]);
// [ 'A', 'B', 'C', 1, 2, 3, null, undefined ]
print(added);

// join
// [ 'A', 'B', 'C' ]
print(arr);
// A-B-C
print(arr.join("-"));

// 多维数组
arr = [[1, 2, 3], [400, 500, 600], '-'];
print(arr);