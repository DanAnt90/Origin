$(".servise_two_container").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

function hover(firstElem, secondElem) {
    firstElem.on("mouseover", function(e) {
        $(e.currentTarget).prev().children().css("opacity", "0.2");
    })
    secondElem.on("mouseover", function(e) {
        $(e.currentTarget).children().css("opacity", "0.2")
    })
    secondElem.on("mouseout", function(e) {
        $(e.currentTarget).children().css("opacity", "1")
    })
};
hover($(".our_team_img_container_hover"), $(".our_team_img_container_main_image"));