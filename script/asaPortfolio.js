document.querySelector(document).ready(function(){ 
        document.querySelector(window).scroll(function(){
        if (this.scrollY > 20){
            document.querySelector('.navbar').classList.add("sticky");
        }else{
            document.querySelector('.navbar').classList.remove("sticky");
        }
    });
    //toggle menu/navbar script
    document.querySelector('.menu-btn').click(function(){
        document.querySelector('.navbar .menu').classList.toggle("active");
        document.querySelector('.menu-btn i').classList.toggle("active");
    });

    // $('menu-btn').click(function(){
    //     $('.navbar .menu').toggleClass("active");
    //     $('.menu-btn i').toggleClass("active");
    // });
});