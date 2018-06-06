# BFC (Block Formatting Context)
## 块级格式上下文
> 两个相邻的BFC之间的距离由margin决定。     
在同一个BFC内部，两个垂直方向相邻的块级元素的margin会发生“塌陷”，重叠为最大的margin

### body根元素会创造一个 bfc 环境，其下所有元素具有相同的上下文环境
块 是页面的基础

**核心**
包裹一个 `overflow` 不为 `visiable` 的新的空间      
外面的环境无法影响，并在内部重新进行 `block formating` 布局和定位     
新的 bfc 给出了新的不受外界影响的块级格式化环境

### BFC 的约束规则
1. 同一个 BFC 的两个相邻块级元素的 margin 会重叠，与方向无关
新的 BFC 破坏这个规则，Context 上下文
2. BFC 的高度，浮动元素也参与计算
3. 布局规则：每个BFC 元素左边要与包含box的左边相接触
4. BFC 的区域不会与 float 盒子重叠

### 如何创建一个 BFC 
> 即重新划分一块渲染区域，它是独立的块级格式化上下文环境
1. 根元素就是一个 BFC
2. `overflow: hidden (非 visiable)` 会生成一个 BFC 
3. float 不为 none 
4. display: inline-block、
display: table-cell、
display: table-captipon
5. position: absolute fixed 只要不为 static

>定位   
块级定位 垂直方向上     
行内    水平方向        
float 浮动 在一行的左右两边     
弹性布局        
position    

> 网页的定位(大概念的)
文档流 、浮动 、定位 、flex 、display: tabel
### 例1 父子
```html
<style>
p {
    color: #ff5555;
    background-color: #ffcccc;
    width: 200px;
    line-height: 100px;
    text-align: center;
    margin: 100px;
}
.wrap {
    /* 创建新的 BFC */
    overflow: hidden;
}
.wrap p {
    margin-top: 150px;
}
</style>
<html>
<p>123</p>
<div class="wrap">
    <p>qwe</p>
</div>
</html>
```
### 例2 浮动
```html
<style>
.par {
    border: 5px solid #fcc;
    width: 300px;
    /* 不是超出隐藏，而是创造一个 BFC 环境 */
    overflow: hidden;
}
.child {
    border: 5px solid #f66;
    width: 100px;
    height: 100px;
    /* 脱离了文档流 */
    float: left;
}
</style>
<html>
<div class="par">
    <div class="child"></div>
    <div class="child"></div>
</div>
</html>
```
### 例3 自适应两列式布局
```html
<style>
.aside {
    /* float BFC 与左边盒子相接触 */
    float: left;
    width: 100px;
    height: 150px;
    background-color: #f66;
}
.main {
    height: 200px;
    background-color: #fcc;
    /* BFC 的区域不会与 float 盒子重叠 实现自定义布局 */
    overflow: hidden;
}
</style>
<div class="aside"></div>
<div class="main">321321321313</div>
```