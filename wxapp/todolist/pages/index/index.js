//index.js
//获取应用实例
const app = getApp()

Page({
	// 数据 对应着 界面状态
	// 数据状态
	data: {
		// 默认的 status 是 1 全部
		// setData => 2 未完成
		//            3 已完成
		status: 1,
		// 界面状态要被 data 全面接管
		addFormShow: false,
		addText: '',
		lists: [],
	},
	
	curLists: [],

	//事件处理函数

	showLists(e) {
		// e 事件对象
		const status = e.currentTarget.dataset.status

		const temp = this.data.lists
	
		if (status == '1') {
			this.curLists = [...temp]
		}
		// 未完成
		if (status == '2') {
			this.curLists = temp.map(item => {
				return item.status == '0' ? item : ''
			})
			console.log(this.curLists)
		}
		// 已完成
		if (status == '3') {
			this.curLists = temp.map(item => {
				return item.status == '1' ? item : ''
			})
			console.log(this.curLists)
		}
		
		for (let i = 0; i < this.curLists.length + 1; i++) {
			this.curLists.forEach((item, index) => {
				if (item == '') {
					console.log(item, index)
					this.curLists.splice(index, 1)
				}
			})
		}

		this.setData({
			status: status,
			curLists: this.curLists
		})
		
	},
	addTodoShow: function (e) {
		this.setData({
			addFormShow: true
		})
	},
	addTodo: function(e) {
		// 如何添加一个新的 ToDo
		// 页面上多一条任务
		// 显示多少条 由 lists 决定
		// lists push
		// 数据驱动界面 数据改变界面自动更新

		// 获取输入框的内容
		const task = {
			title: this.data.addText,
			// title: '烤面筋可带劲了',
			date: '刚刚',
			status: '0'
		}

		// es6 数组插入数据
		const temp = [...this.data.lists, task]
		console.log(temp)
		this.setData({
			lists: temp,
			curLists: temp,
			addFormShow: false
		})

		// 看到界面，我们就知道要的数据
		// 看到交互，了解对数据的操作
	},
	addTodoHide: function(e) {
		this.setData({
			addFormShow: false
		})
	},
	setInput: function(e) {
		// console.log(e.detail.value)
		this.setData({
			addText: e.detail.value
		})
	},
	changeTodo: function(e) {
		const index = e.currentTarget.dataset.item
		const temp = this.data.lists
		temp.forEach((item, i) => {
			// console.log(item, i)
			if (i == index) {
				if (item.status == '0') {
					item.status = '1'
					// 小程序API 弹出提示
					wx.showToast({
						title: '已完成任务',
						icon: 'success',
						duration: 1000
					})
				} else {
					item.status = '0'
					wx.showToast({
						title: '任务打回重做',
						icon: 'circle',
						duration: 1000
					})
				}
			}
		})
		this.setData({
			lists: temp,
			curLists: temp
		})
		// 当前点击条目的 status => success
		// 数据 lists 跟当前条目相关的这一条数据
		// status = 1
		// index
	}
})
