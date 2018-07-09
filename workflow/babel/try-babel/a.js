"use strict";

// 不支持 es6 的浏览器？ babel main.js 转义成 es5 
var a = 1;

var func = function func() {
    console.log(a);
};
