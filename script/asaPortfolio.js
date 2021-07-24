document.querySelector(document).ready(function(){ 
        document.querySelector(window).scroll(function(){
        if (this.scrollY > 20){
            document.querySelector('.navbar').classList.add("sticky");
        }else{
            document.querySelector('.navbar').classList.remove("sticky");
        }
    });
});