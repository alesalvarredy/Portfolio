const darkButton = document.querySelector(".fa-moon");
const lightButton = document.querySelector(".fa-sun");
const body = document.querySelector("body");

const activeDarkMode = () => {
    body.classList.add("dark");
    darkButton.classList.toggle("active");
    lightButton.classList.toggle("active");

}

const removeDarkMode = () => {
    body.classList.remove("dark");
    darkButton.classList.toggle("active");
    lightButton.classList.toggle("active");

}

darkButton.addEventListener("click", () =>{
    activeDarkMode();
})

lightButton.addEventListener("click", () =>{
    removeDarkMode();
})