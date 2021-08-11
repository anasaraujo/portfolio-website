
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

// animation of home section span text


//animation of mywork section

var layout = document.querySelector('.layout');
    layout.addEventListener("mouseover", mouseOver);
    layout.addEventListener("mouseout", mouseOut);

var layout1 = document.querySelector('.layout1');
    layout1.addEventListener("mouseover", mouseOver1);
    layout1.addEventListener("mouseout", mouseOut1);

var layout2 = document.querySelector('.layout2');
    layout2.addEventListener("mouseover", mouseOver2);
    layout2.addEventListener("mouseout", mouseOut2);


var overlay = document.querySelector('.overlay');
var backgroundChanger = overlay.querySelectorAll('span');

var overlay1 = document.querySelector('.overlay1');
var backgroundChanger1 = overlay1.querySelectorAll('span');

var overlay2 = document.querySelector('.overlay2');
var backgroundChanger2 = overlay2.querySelectorAll('span');

function mouseOver() {
    // console.log(backgroundChanger)
        backgroundChanger.forEach(backgroundChange => {
            backgroundChange.classList.remove('changeColor');
            backgroundChange.classList.add('backgroundActive');
        });
    }

function mouseOver1() {
    backgroundChanger1.forEach(backgroundChange1 => {
        backgroundChange1.classList.remove('changeColor');
        backgroundChange1.classList.add('backgroundActive');
    });
}

function mouseOver2() {
    backgroundChanger2.forEach(backgroundChange2 => {
        backgroundChange2.classList.remove('changeColor');
        backgroundChange2.classList.add('backgroundActive');
    });
}

function mouseOut() {
        backgroundChanger.forEach(backgroundChange => {
            backgroundChange.classList.add('changeColor');
            backgroundChange.classList.remove('backgroundActive');
    });
}

function mouseOut1() {
    backgroundChanger1.forEach(backgroundChange1 => {
        backgroundChange1.classList.add('changeColor');
        backgroundChange1.classList.remove('backgroundActive');
    });
}

function mouseOut2() {
    backgroundChanger2.forEach(backgroundChange2 => {
        backgroundChange2.classList.add('changeColor');
        backgroundChange2.classList.remove('backgroundActive');
    });
}
    //   document.getElementsByClassName(".changeColor").style.backgroundColor = '#fbfaf6';


//carousel
function action(event){
    const slider = document.querySelector(".skillsSlider");
    let slideActive = document.querySelector('.active');
    slideActive.classList.remove("active");
    let futureActiveSlide = null;
    if(event.target.id == "prevButton"){
        //button to move back to previous pic is clicked
        futureActiveSlide = slideActive.previousElementSibling;
        slider.style.transform = "translate(-135px, 0)"
        if(futureActiveSlide == null){
            futureActiveSlide = slideActive.parentElement.lastElementChild;
        }
    }else if(event.target.id == "nextButton"){
        //button to move foward to next pic is clicked
        futureActiveSlide = slideActive.nextElementSibling;
        slider.style.transform = "translate(+135px, 0)"
        if(futureActiveSlide == null){
            futureActiveSlide = slideActive.parentElement.firstElementChild;
        }
    }
    futureActiveSlide.classList.add("active");
};
document.querySelector("#prevButton").addEventListener("click",event => action(event));
document.querySelector("#nextButton").addEventListener("click",event => action(event));

