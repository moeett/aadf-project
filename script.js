let openMenu = document.getElementById("burger-menu");
let closeMenu = document.getElementById("close-menu-icon");
let mobileMenu = document.getElementById("menu-open");
let goUp = document.getElementById("go-up");

openMenu.addEventListener("click", function(){
    mobileMenu.style.transform = "translateX(0%)";
    goUp.style.display = "none";
})

closeMenu.addEventListener("click", function(){
    mobileMenu.style.transform = "translateX(100%)";
    goUp.style.display = "flex";
})


window.addEventListener("scroll", function(){
    if (window.scrollY > 0) {
        goUp.style.display = "flex";
    }
    else {
        goUp.style.display = "none";
    }
})
