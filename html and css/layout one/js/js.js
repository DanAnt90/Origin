function ulFuncOneV1() {
    var ulOneV1 = document.getElementsByTagName("ul")[0].getElementsByTagName("a");

    var strOneV1 = "";

    for (var i = 0; i < ulOneV1.length; i++) {
        strOneV1 = strOneV1 + ulOneV1[i].innerHTML + " ";
    }
    console.log(strOneV1);
}
ulFuncOneV1();

function ulFuncOneV2() {
    var ulOneV2 = document.getElementsByTagName("ul")[0].getElementsByTagName("li")
    var strOneV2 = "";

    var i = 0;

    while ( /*ulOneV2[i].nextElementSibling !== null*/ i < 10) {

        strOneV2 = strOneV2 + ulOneV2[i].firstElementChild.innerHTML + " ";

        i++;
    }
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
FooterLastChild();