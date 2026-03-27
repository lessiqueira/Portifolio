let contatoMenu = document.getElementById('contato-menu')
let menu  = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

contatoMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

Menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})