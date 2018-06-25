// 一个 Publisher
// 多个 Subscriber
// 一对多

// pub
let Stark = {}

// sub
Stark.personList = []

Stark.listen = function(fn) {
    this.personList.push(fn)
}

// 触发
Stark.trigger = function() {
    for (let i = 0, fn; fn = this.personList[i++]; ) {
        fn.apply(this, arguments)
    }
}

// 订阅者的过程
Stark.listen(function(msg) {
    console.log(`收到了你${msg}的信息，决定给红包`)
})
Stark.listen(function(msg) {
    console.log(`收到了你${msg}的信息，打飞滴来看`)
})
Stark.listen(function(msg) {
    console.log(`收到了你${msg}的信息，打扰了告辞`)
})

Stark.trigger('菊花侠大战桃花怪')
Stark.trigger('1')
Stark.trigger('2')
Stark.trigger('3')