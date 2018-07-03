class Promise {
    constructor (executor) {
        this.status = 'pending'
        this.value = undefined
        this.reason = undefined
        this.onResolveCallbacks = []
        this.onRejectedCallbacks = []
        
        // value 是 executor 调用时传过来的结果
        let resolve = (value) => {
            if (this.status == 'pending') {
                this.status = 'resolved'
                this.value = value
                this.onResolveCallbacks.forEaggch(fn => fn())
            }
        }

        let reject = (reason) => {
            if (this.status == 'pending') {
                this.status = 'rejected'
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }

        executor(resolve, reject)

    }

    then(onFullFilled, onRejected) {
        if (this.status == 'resolved') {
            onFullFilled(this.value)
        } 
        if (this.status == 'rejected') {
            onRejected(this.reason)
        }
        // 异步代码 then 方法会立即执行
        // 将 onFullFilled、onRejected 放到 executor 方法执行后执行
        if (this.status == 'pending') {
            this.onResolveCallbacks.push(() => {
                onFullFilled(this.value)
            })
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason)
            })
        }
    }


    // ajax setTimeout node 数据库处理 fs 文件操作
}

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('hello promise')
        resolve()
    }, 2000)
    // reject('no promise')
})

p.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})

module.exports = Promise