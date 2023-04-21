$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 1){
            $(header).addClass("shadow");
        }else{
            $(header).removeClass("shadow");
        }
    });
});