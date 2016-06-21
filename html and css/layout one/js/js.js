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
    var ulOneV2 = document.body.children[0].children[1].children[0].children;

    var strOneV2 = "";

    for (var i = 0; i < ulOneV2.length; i++) {
        strOneV2 = strOneV2 + ulOneV2[i].children[0].innerHTML + " ";
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