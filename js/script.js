$(function(){
   $(window).scroll(function(){
       var scroll = $(this).scrollTop();
       if( scroll > 200){
           $('.scroll_nav').slideDown();
       }
       else {
           $('.scroll_nav').slideUp();
       }
   }); 
    
    $('.header li a').click(function(){
        $('html , body').animate({
            scrollTop : $('#' + $(this).data('value')).offset().top
        },1500);
    });
});