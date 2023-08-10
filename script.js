//Toogle class active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};
//End Toogle Class Active

//Click anywhere to close hamburger menu remove class active
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    };
});
//End remove class active
