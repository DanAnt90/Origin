var rangeMin = +prompt("Введите начало диапазона");
var rangeMax = +prompt("Введите конец диапазона");
if (isNaN(rangeMin) == true || isNaN(rangeMax) == true) {
    alert("неверный ввод");
}
if (rangeMin > rangeMax) {
    rangeMin = rangeMin + rangeMax;
    rangeMax = rangeMin - rangeMax;
    rangeMin = rangeMin - rangeMax;
}
for (var i = rangeMin; i <= rangeMax; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        alert(i + " число кратно трем и пяти");
    } else if (i % 3 === 0) {
        alert(i + " число кратно трем");
    } else if (i % 5 === 0) {
        alert(i + " число кратно пяти");
    }
}