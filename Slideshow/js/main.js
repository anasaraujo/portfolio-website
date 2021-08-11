function nextSlide() {
    let activeSlide = document.querySelector(".activeSlide");
    let nextActiveSlide = activeSlide.nextElementSibling;
    activeSlide.classList.remove("activeSlide");
    if (nextActiveSlide.classList.contains("slides")) {

        nextActiveSlide.classList.add("activeSlide");
    } else {
        activeSlide.parentElement.childNodes[1].classList.add("activeSlide");

    }



}

function prevSlide() {
    let activeSlide = document.querySelector(".activeSlide");
    let nextActiveSlide = activeSlide.previousElementSibling;
    activeSlide.classList.remove("activeSlide");
    if (nextActiveSlide != null) {

        nextActiveSlide.classList.add("activeSlide");
    } else {
        activeSlide.parentElement.childNodes[5].classList.add("activeSlide");

    }



}


document.querySelector("#nextButton").addEventListener("click", nextSlide);
document.querySelector("#prevButton").addEventListener("click", prevSlide);