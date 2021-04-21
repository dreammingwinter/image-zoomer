(() => {
const images = document.querySelectorAll('.scalable')
const body = document.querySelector('body')
const zc = document.createElement('div')
const zcimg = document.createElement('img')
zc.classList.add('zoomcircle')
zc.appendChild(zcimg)

const zoomcircle__sizes__half = {
    w: 40,
    h: 40
}

images.forEach(img => {
    img.addEventListener('mousemove', e => {
        zc.style.top = `${e.pageY}px`
        zc.style.left = `${e.pageX}px`
        zcimg.style.objectPosition = `
            ${ -e.offsetX + zoomcircle__sizes__half.w }px 
            ${ -e.offsetY + zoomcircle__sizes__half.h }px
        `
    }, { passive: true })

    img.addEventListener('mouseenter', e => {
        body.appendChild(zc)
        zcimg.src = e.target.src
    })

    img.addEventListener('mouseleave', () => {
        body.removeChild(zc)
    })
})
})()