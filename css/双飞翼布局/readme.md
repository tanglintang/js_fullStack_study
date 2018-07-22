# 双飞翼布局

## container 设置 BFC

## middle、left、right 左浮动

## middle 设置子盒子 inner-middle 作为显示盒子，为了中间内容不被遮挡

## 用 margin-left 和 margin-right 给左右两个子面板留出空间


# 双飞翼布局与圣杯布局的主要差别在于
1. 双飞翼布局给主面板添加了一个父标签用来通过margin给子面板腾出空间
2. 圣杯采用的是padding，而双飞翼采用的margin，解决了圣杯布局的问题
3. 双飞翼布局不用设置相对布局，以及对应的left和right值