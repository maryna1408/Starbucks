const thumbEl = document.getElementById('thumb')
const coffeeImageEl = document.getElementById('coffeeImage')
const circleEl = document.getElementById('circle')


thumbEl.addEventListener('click', event =>{
    const thumbImgEl = event.target.closest('.thumb-img')
    if (thumbImgEl) {
        console.log(thumbImgEl.dataset.action)
        if (thumbImgEl.dataset.action == "1") {
            changeImg("img/img1.webp")
            changeCircleColor('var(--theme-color)')
        }
        else if (thumbImgEl.dataset.action == "2") {
            changeImg("img/img2.webp")
            changeCircleColor('var(--theme-color2)')
        }
        else if (thumbImgEl.dataset.action == "3") {
            changeImg("img/img3.webp")
            changeCircleColor('var(--theme-color3)')
        }
    }
})

function changeImg(img) {
    coffeeImageEl.src = img
}

function changeCircleColor(color) {
    circleEl.style.background = color
}