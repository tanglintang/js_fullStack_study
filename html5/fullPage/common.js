class PureFullPage {
    // constructor 属性定义
    constructor(options) {
        this.container = document.getElementById('pureFullPage')
        // this.page = this.container.get
        this.clientHight = document.documentElement.clientHeight
        // 手动计算 page 高度
        this.pageHeight = document.querySelector('#pureFullPage').offsetHeight
        this.init()
    }
    init() {
       this.container.style.height = `${this.clientHight}px` 
        //    事件监听
        // 浏览器嗅探 用户代理
        // mousewheel 截流
        // this.scrollMouse 当前的方法 负责滚动 问题 执行多次太频繁
        // throttle 规定时间内执行一次
        // 重新返回一个函数， handleMouseWheel， 闭包，
        // 将 this.scrollMouse 封装到内部
        // this => 函数 的作用域
        // delay => 推迟执行

        const handleMouseWheel = utils.throttle(this.scrollMouse, this, 1000)

        if ( navigator.userAgent.toLowerCase().indexOf('firefox') == -1 ) {
            document.addEventListener('mousewheel', handleMouseWheel, false)
        } else {
            document.addEventListener('DOMMouseScroll', handleMouseWheel, false)
        }
    }
    // 滚轮事件处理函数
    scrollMouse(e) {
        console.log(e)
    }
}