const navShowBtn = document.querySelector('#navShow')
// const navHideBtn = document.querySelector('#navHide')
const navTop = document.querySelector('#navTop')

navShowBtn.addEventListener('click', () => {
    navTop.classList.toggle('header-bottom__nav--open')
    document.body.style.position = 'fixed'
    document.body.style.top = `-${window.scrollY}px`
})

// navHideBtn.addEventListener('click', () => {
navTop.addEventListener('click', (e) => {
    console.log(e)
    navTop.classList.toggle('header-bottom__nav--open')
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    // window.scrollTo(0, parseInt(scrollY || '0') * -1)
    window.scrollTo({
        top: parseInt(scrollY || '0') * -1,
        behavior: 'smooth'
    })
})
