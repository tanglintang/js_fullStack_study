const router = require('koa-router')()
const controller = require('../controller/c-signin')

// 路由匹配交付中间件
router.get('/signin', controller.getSignin)
router.post('/signin', controller.postSignin)

module.exports = router
