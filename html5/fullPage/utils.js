// 截流 throttle，
// 在规定时间内只执行一次，先执行
// 防抖 debounce 
// 在规定时间后执行一次，后执行

// 都为解决高频事件
// scroll mousewheel mouseover mouesmove touchmove onresize

const utils = {
    // method 规定时间内执行的次数只有一次
    // method 执行时 函数内的 this 指向 pureFullPage 不然就是指向全局
    // context 上下文环境
    throttle(method, context, delay) {
        // 返回时的函数就是事件执行的真正的函数本体
        // args 事件对象 event
        // 执行时上下文环境要和以前一样
        let wait = false
        // 闭包
        return function (...args) {
            console.log(wait)
            if (!wait) {
                method.apply(context, args)
                wait = true
                method.timer = setTimeout(() => {
                    wait = false
                }, delay)
            }
        }
    },
    debounce(method, context, event, delay) {
        // window.resize
        // setTimeout 多少秒后执行，只执行一次
        // setInterval() 隔多少秒执行一次，不停止就一直执行
        clearTimeout(context.timer)
        // 保持定时器？使用变量会在每次执行后销毁，给 context 函数添加一个方法可以一直保存
        context.timer = setTimeout(() => {
            method.call(context, event)
        }, delay)
    },
    getWheelDelta(event) {
        // console.log(event);
        if (event.wheelDelta) {
            this.getWheelDelta = event => event.wheelDelta;
            return event.wheelDelta;
        }
    }

}