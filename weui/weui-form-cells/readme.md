# WEUI 微信统一 Web 界面

## 表单 cells
> 在小程序中，使用 WEUI 做快速开发，让小程序更快
- MVVM 
    用户登录模块: usrename password
    Model: user(object)
        value="{{user.username}}"
        value="{{user.password}}"
    V: wxml
        用 WEUI 写 form
    VM: 两者的结合
        V: View 模板，待编译(compile) 跟随 Model
        M: Model 页面数据绑定 bindinput、bindtap...事件->值改变->状态改变
        VM: 代表那一刻的状态
- BEM 命名规范  
weui-cells__title、weui-cells_form。。。
- 1px 问题  
问题：一般在移动端，由于dpr（设备像素比）不为1，在PC端显示1像素的边框，在移动端其实显示为2px    
**解决方法：使用伪元素设置1px的边框，然后使用 transform:scale，对边框进行缩放（scaleY）**
- `webkit-tap-highlight-color` 属性
禁止可点击元素高亮效果
- 自定义样式前  
`-webkit-appearance: none;appearance: none;`清除浏览器默认样式
- `outline: 0;`取消默认的文本框聚焦样式等
- 属性选择器    
```css
 /* 表示类名中包含 weui-icon- 的全选中 */
[class^="weui-icon-"],
[class*="weui-icon-"]
```
- `.weui-cells__title + .weui-cells`   
.weui-cells前一定存在__title, 兄弟关系
只选择前面有 title 的 cells  
