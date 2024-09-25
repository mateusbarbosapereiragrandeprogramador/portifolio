let abrirMenu = document.getElementById('abrir-menu')
let menu =document.getElementById('menu-mobile')
let overlay =document.getElementById('overlay')
abrirMenu.addEventListener('click',()=>{
   menu.classList.add('menuAbrir') 
})

menu.addEventListener('click',()=>{
    menu.classList.remove('menuAbrir') 
 })

overlay.addEventListener('click',()=>{
    menu.classList.remove('menuAbrir') 
 })