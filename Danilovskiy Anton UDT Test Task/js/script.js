$(".main_bottom_news").slick({
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});


function menuToggle() {
    $('.wrapper').click(function(e){
        var eventInMenu = $(e.target).parents('.header_logo');
        if(!eventInMenu.length){
            $('.header_logo_sub').hide();
        }
    });
    $('.header_logo').click(function(){
        $('.header_logo_sub').toggle();
    });
};
menuToggle();