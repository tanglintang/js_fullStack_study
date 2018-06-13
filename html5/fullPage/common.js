class PureFullPage {
    // constructor 属性定义
    constructor(options) {
        // 默认配置项
        const defaultOptions = {
            // 垂直方向上的滚动条
            isShowNav: true,
            delay: 1000,
            // 每次turnpage的callback
            definePages: () => {}
        }
        // Object.assign
        // 如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。后来的源的属性将类似地覆盖早先的属性。
        this.options = Object.assign(defaultOptions, options)
        console.log(options)

        this.container = document.getElementById('pureFullPage')
        // this.page = this.container.get
        this.clientHight = document.documentElement.clientHeight
        // 手动计算 page 高度
        this.pageHeight = document.querySelector('#pureFullPage').offsetHeight
        // 提供默认配置项
        this.DELAY = this.options.delay
        this.currentPosition = 0
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

        const handleMouseWheel = utils.throttle(this.scrollMouse, this, this.DELAY)

        if ( navigator.userAgent.toLowerCase().indexOf('firefox') == -1 ) {
            document.addEventListener('mousewheel', handleMouseWheel, false)
        } else {
            document.addEventListener('DOMMouseScroll', handleMouseWheel, false)
        }

        // 事件处理函数交由对象的方法执行
        window.addEventListener('resize', this.handleWindowResize.bind(this), false)

    }
    // 滚轮事件处理函数
    scrollMouse(event) {
        // 偏移量
        // 兼容问题，单独处理
        console.log(event)
        const delta = utils.getWheelDelta(event)
        if (delta > 0) {
            this.goUp()
        } else {
            this.goDown()
        }
    }

    handleWindowResize(event) {
        // 作为对象的方法，肯定有需要找到那个对象
        // this 代表那个对象
        // 防抖
        utils.debounce(this.getNewPosition, this, event, this.DELAY)
    }
    getNewPosition() {
        console.log('debounce')
        this.viewHeight = document.documentElement.clientHeight
        this.container.style.height = this.viewHeight + 'px'
        console.log(document.documentElement.clientHeight)
    }

    goUp() {
        this.currentPosition += this.clientHight
        
        if (this.currentPosition > 0 ) {
            this.currentPosition = 0
        }
        this.container.style.top = `${this.currentPosition}px`
    }
    goDown() {
        this.currentPosition -= this.clientHight
        
        if (this.currentPosition < -2*this.clientHight ) {
            this.currentPosition = -2*this.clientHight
        }
        this.container.style.top = `${this.currentPosition}px`
        
    }
}