# ToDoList

**wxapp 切换类名**
- DOM 编程：
    ```js
	.classList.remove('active')
    .classList.add('active')
    ```
- MVVM 编程 (Model-View-ViewModel)     
    MVVM Model(数据模型data) View VM(视图模型层)    
    wxml 是一个模板         
	{{ 数据状态 }} 进行数据绑定 数据直接输出到页面    
	动态的 可编译   
	data 活动的数据 setData 改变状态    
	状态一旦改变 界面立即改变   
	这就是单项数据绑定

    数据驱动界面 数据改变界面自动更新   
    
- 小程序 数据属性
```
    class="{{status=='1'?'active':''}}"     
                        数据决定状态，直接从data获取数据并改变状态  
    bindtap=""              事件绑定    
    data-demo="id"          数据属性,以区分事件target       
    wx:for="{{}}"           for 指令 循环输出模板   
    wx:key="index"          和 for 同时出现，   
    {{item.id}}             获取动态数据，默认每一项为一个 item(item.title、item.id。。。)
```