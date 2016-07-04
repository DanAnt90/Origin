var $subMenu = $(".submenu").eq(0);
var $dropDown = $(".dropdown").eq(0);
var $img = $("img");
var $ulLeftOdd = $("ul").eq(2).find("li:odd");
var $footerText = $("ul.footer li:last-child span");
var $headerUl = $("ul.topul");
$dropDown.on("click", function() {
    $subMenu.toggle();
})

$headerUl.children().eq(2).before('<li><a href="#">Hide img</a><li>');
$headerUl.children().eq(3).remove();
$headerUl.children().eq(2).on("click", function() {
    $img.slideToggle();
})

$ulLeftOdd.css({
    "background-color": "green",
    "font-family": "Arial"
})

$footerText.html("2016");









/*function ulFuncOneV2() {
    var ulOneV2 = document.getElementsByTagName("ul")[0].firstElementChild;
    var strOneV2 = "";

do {
    //если элемент li существует, то записываем innerHTML внутреннего тега <a> в переменную
    if (ulOneV2 !== null)
        strOneV2 += ulOneV2.firstElementChild.innerHTML + " ";
    ulOneV2 = ulOneV2.nextElementSibling;
}while(ulOneV2 !== null);

    console.log(strOneV2);
}
ulFuncOneV2()

function ulFuncTwo() {
    var ulTwo = document.getElementsByTagName("ul")[1].children
    var strTwo = "";

    for (var i = 0; i < ulTwo.length; i++) {
        strTwo = strTwo + ulTwo[i].children[0].innerHTML + " ";
    }
    console.log(strTwo);
}
ulFuncTwo()

function imgSearch() {
    var image = document.getElementById("img");
    console.log(image.src);
}
imgSearch();

function FooterLastChild() {
    var footerLi = document.getElementsByTagName("ul")[3].lastElementChild;
    console.log(footerLi.innerHTML)
}
FooterLastChild();*/