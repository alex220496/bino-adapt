// MOBILE MENU
const mainMenu = document.querySelector(".nav__menu")
const mobMenu = document.querySelector(".nav-mobile-menu")

mobMenu.addEventListener("click", () => {
    mobMenu.classList.toggle("active-menu")
    if(mobMenu.classList.contains("active-menu")){
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu")
    }
})
// SLIDER
const btnNext = document.querySelector(".btn-next"),
      btnPrev = document.querySelector(".btn-prev"),
      sliders = document.querySelectorAll(".slider");

let index = 0;

const activeSlide = i => {
    for(slider of sliders) {
        slider.classList.remove("active");
    }
    sliders[i].classList.add("active")
}

const nextSlide = () =>  {
    if(index === sliders.length - 1) {
        index = 0; 
        activeSlide(index);
        
    } else {
        index++;
        activeSlide(index);
    }
}

const prevSlide = () =>  {
    if(index === 0) {
        index = sliders.length - 1; 
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

// setInterval(() => {nextSlide()}, 3000);
btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide)
// 