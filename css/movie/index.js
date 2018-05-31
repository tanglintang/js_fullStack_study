window.onload = function () {
    let dataList = [
        { 'src': 'https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2520331478.jpg' },

        { 'src': 'https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2520331478.jpg' },

        { 'src': 'https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2520331478.jpg' },

    ]

    window.onscroll = function () {
        if (checkScrollSlide()) {
            let oParent = document.querySelector('#list')
            for (let i = 0; i < 3; i++) {
                
                let oA = document.getElementsByClassName('item')[0]
                oParent.appendChild(oA.cloneNode(true))

                // oA.className = 'item'
                // oParent.appendChild(oA)
                // let oDiv = document.createElement('div')
                // oDiv.className = 'cover'
                // oA.appendChild(oDiv)
                // let oPic = document.createElement('div')
                // oPic.className = 'ratio3_4'
                // let oInfo = document.createElement('div')
                // oInfo.classList = 'info'
                // oDiv.appendChild(oPic)
                // oDiv.appendChild(oInfo)
                // let oImg = document.createElement('img')
                // oImg.className = 'img-show'
                // oImg.src = dataList[i].src
                // setTimeout(() => {
                //     oImg.style.opacity = 1;
                // }, 1000)
                // oPic.appendChild(oImg)

                // let oH = document.createElement('h3')
                // oH.innerHTML = '超时空同居'
                // oInfo.appendChild(oH)
            }
        }
    }

    function checkScrollSlide() {
        let oParent = document.querySelector('#list')
        let oItems = getChildElement(oParent, 'item')
        //最后一个子节点 图片距离顶部距离
        let lastItemHeight = oItems[oItems.length - 1].offsetTop + Math.floor(oItems[oItems.length - 1].offsetHeight / 2)
        // 当前页面滚动条纵坐标的位置
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        // 当前页面高度
        let height = document.body.clientHeight || document.documentElement.clientHeight

        return (lastItemHeight < scrollTop + height) ? true : false
    }

    // 获取所有子节点
    function getChildElement(parent, item) {
        let arr = []
        let oElements = parent.getElementsByTagName('*')
        for (let i = 0; i < oElements.length; i++) {
            if (oElements[i].className == item) {
                arr.push(oElements[i])
            }
        }
        return arr
    }
}