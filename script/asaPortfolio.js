
const navbar = document.querySelector(".navbar")
const menuBtn = document.querySelector(".menu-btn")
const menuH = document.querySelector(".menu-h")
const menuX = document.querySelector(".menu-x")

//EventListener for scroll page menu/navbar 
window.addEventListener("scroll", function(){
    if (this.scrollY > 20){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    };

});

//EventListener for toggle menu/navbar hamburguer 
menuBtn.addEventListener('click', function(){
    document.querySelector('.menu').classList.toggle("active");
    // document.querySelector('.menu-btn').classList.toggle("active");
    menuH.classList.toggle("off");
    menuX.classList.toggle("off");
});

//carroussel
function action(event){
    let slideActive = document.querySelector('.active');
    slideActive.classList.remove("active");
    let futureActiveSlide = null;
    if(event.target.id == "prevButton"){
        //carregaram no botão de andar para trás
         futureActiveSlide = slideActive.previousElementSibling;
        if(futureActiveSlide == null){
            futureActiveSlide = slideActive.parentElement.lastElementChild;
        }
    }else if(event.target.id == "nextButton"){
        //carregaram no botão de andar para a frente
         futureActiveSlide = slideActive.nextElementSibling;
        if(futureActiveSlide == null){
            futureActiveSlide = slideActive.parentElement.firstElementChild;
        }
    }
    futureActiveSlide.classList.add("active");
};
document.querySelector("#prevButton").addEventListener("click",event => action(event));
document.querySelector("#nextButton").addEventListener("click",event => action(event));