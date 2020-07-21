
let width = window.innerWidth
let mobileNav = document.querySelector('nav button')
let mobileMenu = document.querySelector('.mobile-nav')
let exit = document.querySelector('.mobile-nav button')
let navBtn = document.querySelectorAll('.mobile-nav a')

mobileNav.addEventListener("click", () => {
    mobileMenu.classList.remove('display-none')
})

exit.addEventListener("click", () => {
    mobileMenu.classList.add('display-none')
})

window.addEventListener("resize", () => {
    width = window.innerWidth
    if (width > 700) {
        mobileMenu.classList.add('display-none')
    }
})

navBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        mobileMenu.classList.add('display-none')
    })
})