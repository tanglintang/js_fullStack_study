# babel 

- 创建一个配置文件 `.babelrc`
```js
{
    // 预处理集合 建议 env
  "presets": ["env"],
  "plugins": []
}
```
- 安装
**npm install babel-core babel-cli -g** 全局安装
**yarn add babel-core -D** 本地安装 babel-core
**yarn add babel-preset-env** 

- babel-core
转义的核心，解释器，翻译成 es5 语言
- babel-cli
babel 命令行可开发工具

- babel main.js -o a.js
```js
// main.js
const a = 1

const func = () => {
    console.log(a)
}
```
编译后：
```js
// a.js
"use strict";

var a = 1;

var func = function func() {
    console.log(a);
};
```

> 编译过程 从 source_code 通过 .babelrc cli 到 target(运行平台)
>> babel 预处理只是语法糖，比如 class 并没有，将 es5 中没有的 es6 语法实现一遍，像 const 这样最基本的放置在 babel-core内，还有一些没有的 如 Object.assign() / promise / async 等，我们称之为 **plugins**

- plugin 插件安装
`$ yarn add babel-plugin-transform-runtime`

`$ yarn add babel-preset-stage-2 -D` 使用2015年第二季度的版本

```js
{
    "presets": [
        ["env",{
            "modules": "commonjs"
        }],
        "stage-2"
    ],
    "plugins": [
        "transform-runtime"
    ]
}
```
## babel 总结
1. 编译以适用不同版本
2. 转义 es5 标准及 语法糖
3. plugins transforms-runtime