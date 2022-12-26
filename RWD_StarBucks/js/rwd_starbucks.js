$(function(){
    $('.slider_img').bxSlider({
        mode: 'fade',
        pause: 3000,
        auto: true,
        pager: false,
    });
    $('a[href="#"]').on('click',function(e){
        e.preventDefault();
    });
    $('.menu_toggle_btn').click(function(){
        $('.gnb').stop().toggle();
    });
});