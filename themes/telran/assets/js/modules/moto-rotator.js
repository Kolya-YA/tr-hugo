const motos = document.querySelector('.main-top__moto')
const motoItems = motos.children

let curItem = 0

const chooseItem = () => {
    curItem = curItem + 1 < motoItems.length ? curItem + 1 : 0

    for (let i = 0; i < motoItems.length; i++) {
        motoItems[i].style.display = curItem === i ? 'list-item' : 'none'        
    }
}

window.setInterval(chooseItem, 6000)