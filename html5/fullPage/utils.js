const utils = {
    // method 规定时间内执行的次数只有一次
    // method 执行时 函数内的 this 指向 pureFullPage
    // context 上下文环境
    throttle(method, context, delay) {
        // 返回时的函数就是事件执行的真正的函数本体
        // args 事件对象 event
        // 执行时上下文环境要和以前一样
        let wait = false
        return function(...args) {
            console.log(wait)
            if (!wait) {
                method.apply(context, args)
                wait = true
                method.timer = setTimeout(() => {
                    wait = false
                }, delay)
            }
        }
    }
}