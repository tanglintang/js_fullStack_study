# 移动端网站布局
1. padding-top: 47px;   
    给navigationBar(44px) fixed 让位置

2. 自建九宫格最方便的写法   
    `width: 33.33333%; `
2. 图片延迟加载的时候先占好位置     
    `min-height: 87px;  `   
    - 根据内容大小进行占位，
    有宽度，设置 `padding-top: 100%;`
    形成一个正方形
    - 绝对定位，文档流不会收到影响

3. 文本只有一行 超出省略号显示
    `-webkit-line-clamp: 1;`

4. 无限加载数据，下拉到底部自动加载
    步骤：  
    - 获取所有子节点    
    - 获取最后一个子节点距离顶部的距离  
    - 获取当前页面滚动条位置和可视区高度之和
    - 判断 2 是否 小于 3 ，如果是则通过 appendChild 添加节点

5. 书接上文，有一个加载相同节点的方法：cloneNode。  
cloneNode()是DOM中Node对象的方法，使用cloneNode可以方便的复制DOM节点。cloneNode()接收一个参数include_all。include_all为一个布尔值，true表示被clone的节点的所有子节点也会被clone（既深度clone），false(默认)只会clone原节点。