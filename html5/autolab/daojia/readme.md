# 京东到家
- css样式分文件
    base.css -> reset 基础样式  
    loading.css 为了加载资源    
    main.css 主页务

- 预加载器 Preloader
    使用 npm 来安装：
    ```
    npm init -y     // new package.json 项目描述文件
    package.json 添加 "dependencies" :{
        // 声明依赖文件
        "preloader.js": "^1.0.0"
    }
    npm install  // package.json 内的依赖安装
    node_modules 文件夹/preloader.js/src/preloader.js

    ```
    引入preloader.js 
    ```html
    <script src="./node_modules/preloader.js/src/preloader.js"></script>
    ```