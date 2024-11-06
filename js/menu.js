(function(){

const openAbrir = document.querySelector(".menu__hamburger")
const menuLista = document.querySelector(".navbar__list")
const menuCerrar = document.querySelector(".nav__close")

openAbrir.addEventListener("click", ()=>{
    menuLista.classList.add("navbar__list--show");
})

menuCerrar.addEventListener("click", ()=>{
    menuLista.classList.remove("navbar__list--show")
})

})();