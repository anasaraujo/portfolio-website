
const navbar = document.querySelector(".navbar")
const scrollBtn = document.querySelector(".scroll-btn")
const menuBtn = document.querySelector(".menu-btn")
const menuH = document.querySelector(".menu-h") /*icon btn hamburguer*/
const menuX = document.querySelector(".menu-x") /*icon btn cruz*/

//EventListener for scroll page menu/navbar and scroll-up
window.addEventListener("scroll", function(){
    if (this.scrollY > 20){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
    if (this.scrollY > 500) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
    }
});

//EventListener for scroll up to home section
scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0 });
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