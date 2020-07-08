
let width = window.innerWidth
let navBtn = document.querySelectorAll('nav button')
let mobileNav = document.querySelector('.mobile-nav')
let links = document.querySelectorAll('.mobile-nav a')

console.log(links)

navBtn.forEach(btn => btn.addEventListener("click", () => {
    mobileNav.classList.toggle('display-none')
}))

window.addEventListener("resize", () => {
    width = window.innerWidth
    if (width > 767) {
        mobileNav.classList.add('display-none')
    }
})

links.forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.add('display-none')
    })
})