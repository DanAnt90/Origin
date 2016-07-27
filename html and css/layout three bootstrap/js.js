function slick() {
$('.slider_two_content').slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});
}
slick()

/*if ($(".wrapper").width() > 950) {
        $('.slider_two_content').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        })
    } else if ($(".wrapper").width() < 950 && $(".wrapper").width() > 530) {
        $('.slider_two_content').slick({
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1
        })
    } else if ($(".wrapper").width() < 530) {
        $('.slider_two_content').slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        })
    }*/