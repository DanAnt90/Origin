/*SLICK SLIDER ADD*/

$(".servise_two_container").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});



/*GOOGLE MAP ADD*/

$(".map").on("click", function () {
    $("#google_map").slideToggle();
    setTimeout(initialize, 500);
});


var myCenter = new google.maps.LatLng(51.508742, -0.120850);

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("google_map"), mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
    });

    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);



/*FORM WALIDATION*/

var $form = $(".form").eq(0),
    $name = $("#name").eq(0),
    $surName = $("#surname").eq(0),
    $country = $("#country").eq(0),
    $email = $("#email").eq(0),
    $error = $("p.error").eq(0);

$form.on("submit", function (event) {
    event.preventDefault();
    if ($name.val().length < 1) {
        $error.html("Not the correct input name");
        return;
    }
    if ($surName.val().length < 2) {
        $error.html("Not the correct input surname");
        return;
    }
    if ($country.val().length < 2) {
        $error.html("Not the correct input country");
        return;
    }
    if ($email.val() === "") {
        $error.html("enter email")
        return;
    }
    var $regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var $emailExp = $regexp.test($email.val());
    if ($emailExp == false) {
        $error.html("Not the correct input email")
        return;
    }
    this.submit();
});

//BOOTSTRAP Effect

$(window).scroll(function () {
    $(".slideanim").each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});

// Scroll Up Page
$(".up").hide();
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $(".up").fadeIn();
    } else {
        $(".up").fadeOut();
    }
});
$(".up").click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
});