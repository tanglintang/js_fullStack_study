const par = document.querySelector('.grid-item')
console.log(par)

const dom = document.getElementsByClassName('contentHolderUnit')
const arr = [...dom]
let flag = 1

for (const i in arr) {
    if (i == flag) {
        arr[i].style.opacity = '1'
        arr[i].style.zIndex = '9'
        arr[i].style.left = '-320px'
        arr[i-1].style.left = '0px'

    } else {
        arr[i].style.opacity = '0.7'
        arr[i].style.transform = 'scale(0.8, 0.8)'
        arr[i].style.left = '-530px'
        arr[i].style.zIndex = '1'
    }
}

function tab(arr) {
    // clearInterval(timer)
    const timer = setInterval(() => {
        // par.style.left = `${-410*flag}px`
        par.style.transition="all 1.5s"

        flag++
        if (flag == '6') flag = 0

        for (const i in arr) {
            // arr[i].style.left = `${-530*flag}px`

            arr[i].style.transition="all 1.5s"
            console.log(flag)
            if (i == flag) {
                arr[i].style.opacity = '1'
                arr[i].style.zIndex = '9'
                arr[i].style.transform = 'scale(1, 1)'
                arr[i].style.left = `${-320*(flag+1)}px`
            }
            if (i > flag) {
                arr[i].style.opacity = '0.7'
                arr[i].style.transform = 'scale(0.8, 0.8)'
                arr[i].style.zIndex = '1'
                arr[i].style.left = `${-320*(flag+2)}px`
            }
            if (i < flag) {
                arr[i].style.opacity = '0.7'
                arr[i].style.transform = 'scale(0.8, 0.8)'
                arr[i].style.zIndex = '1'
                arr[i].style.left = `${-320*(flag)}px`
            }
        }
    }, 3000)
}
tab(arr)

// if (i == flag) {
//     arr[i].style.opacity = '1'
//     arr[i].style.zIndex = '9'
//     arr[i].style.transform = 'scale(1, 1)'
//     arr[i].style.left = `${-530*flag}px`
// } else {
//     arr[i].style.opacity = '0.7'
//     arr[i].style.left = `${-520*flag}px`
//     arr[i].style.transform = 'scale(0.8, 0.8)'
//     arr[i].style.zIndex = '1'
// }