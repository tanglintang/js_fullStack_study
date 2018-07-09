# eslint

## 安装
`$ yarn add eslint -D`

## 配置  `.eslint.js`
```js
module.exports = {
    // 环境
    env: {
        es6: true,
        node: true
    },
    extends: 'eslint:recommended',
    rules: {
        // 引号 ：单引号
        quotes: ['error', 'single'],
        // 分号
        semi: ['error', 'always'],
        // 缩进 4
        indent: ['error', 4],
        // 换行风格
        'linebreak-style': ['error', 'unix']
    }
}
```


