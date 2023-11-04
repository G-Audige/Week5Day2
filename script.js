const titleEl = document.querySelector('title')
titleEl.textContent = "DOM Menu Lab 2"

// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
    ]},
]
 

const mainEl = document.querySelector('main')
const h1 = document.createElement('h1')
const text = document.createTextNode("SEI Rocks!")
const topMenuEl = document.querySelector('#top-menu')
const subMenuEl = document.querySelector('#sub-menu')


mainEl.style.backgroundColor = 'var(--main-bg)'
h1.append(text)
mainEl.append(h1)
mainEl.classList.add('flex-ctr')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')

for(let x of menuLinks) {
    let a = document.createElement('a')
    a.setAttribute('href', x.href)
    a.textContent = x.text
    topMenuEl.append(a)
}

subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = 'top'
const topMenuLinks = topMenuEl.querySelector('a')

const showingSubMenu = false
topMenuEl.addEventListener('click', function(e) {
    preventDefault()
    if(e.target.localName !== 'a') {
        return
    }
    console.log(e)
})