var $subMenu = $(".submenu").eq(0);
var $dropDown = $(".dropdown").eq(0);
var $LastLiAppend = $("ul").eq(1);
var $img = $("img");
var $ulLeft = $("ul").eq(2).find("li:odd");
var $footerText = $("ul.footer li:last-child span");

$dropDown.on("click", function(){
    $subMenu.toggle();
})

$LastLiAppend.append("<li>Hide img</li>");

$LastLiAppend.on("click", function(){
    $img.slideToggle();
})
$ulLeft.css({
    "background-color" : "green",
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