const header = document.getElementById("header");
const navBurguer = document.querySelector(".nav_burguer");
const navBurguerLine1 = document.querySelector(".nav_burguer-line-1");
const navBurguerLine2 = document.querySelector(".nav_burguer-line-2");
const navBurguerLine3 = document.querySelector(".nav_burguer-line-3");
const itemContainer = document.querySelector(".items_container");
const menuItems = document.querySelectorAll(".menuItems");
const backgroundBlur = document.querySelector(".background_blur");

const showNavMenu = () => {
    navBurguerLine1.classList.toggle("active");
    navBurguerLine2.classList.toggle("active");
    navBurguerLine3.classList.toggle("active");
    itemContainer.classList.toggle("active");
    backgroundBlur.classList.toggle("active");
}

navBurguer.addEventListener("click", () => {
    showNavMenu();
})

menuItems.forEach((items)=>{
    items.addEventListener("click", () => {
        showNavMenu();
    } )
})

window.addEventListener("scroll", ()=>{
    if(window.scrollY){
        header.classList.add("active");
    } else{
        header.classList.remove("active");
    }
})

