
const navbar = document.querySelector(".navbar")
const menuBtn = document.querySelector(".menu-btn")


window.addEventListener("scroll", function(){
    if (this.scrollY > 20){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    };
        //toggle menu/navbar script  
     menuBtn.addEventListener('click', function(){
         document.querySelector('.navbar .menu').classList.toggle("active");
         document.querySelector('.menu-btn i').classList.toggle("active");
     });
});



/* $(document).ready(function(){
     $(window).scroll(function(){
         if(this.scrollY > 20){
             $('.navbar').addClass("sticky");
         }else{
             $('.navbar').removeClass("sticky");
         }
     });
    //toggle menu/navbar script
     $('menu-btn').click(function(){
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
    });
}); */
