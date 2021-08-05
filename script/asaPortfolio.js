
const navbar = document.querySelector(".navbar")
const menuBtn = document.querySelector(".menu-btn")
const menuH = document.querySelector(".menu-h")
const menuX = document.querySelector(".menu-x")
const liBtn = document.getElementsByClassName('li-btn');
const carousel = document.querySelector('.carousel');

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
for (var i = 0; i < liBtn.length; i++) {
    liBtn[i].addEventListener('click', function () {
      menu.classList.toggle('active');
      menuIco.classList.toggle('off');
      closeIco.classList.toggle('off');
    });
  }