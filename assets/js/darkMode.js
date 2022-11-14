const darkButton = document.querySelector(".fa-moon");
const lightButton = document.querySelector(".fa-sun");
const body = document.querySelector("body");

const activeDarkMode = () => {
    body.classList.add("dark");
    localStorage.setItem("darkMode", "active");
    darkButton.classList.toggle("active");
    lightButton.classList.toggle("active");

}

const removeDarkMode = () => {
    body.classList.remove("dark");
    localStorage.setItem("darkMode", "inactive")
    darkButton.classList.toggle("active");
    lightButton.classList.toggle("active");

}

if (localStorage.getItem("darkMode")==="active"){
    activeDarkMode();
}

darkButton.addEventListener("click", () =>{
    activeDarkMode();
})

lightButton.addEventListener("click", () =>{
    removeDarkMode();
})