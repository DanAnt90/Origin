var arr = [];
var arr2 = [];
var number = 10;

function arrRandom(min, max) {
    for (var i = 0; i < number; i++) {
        arr.push(Math.floor(Math.random() * (max - min)) + min)
    }
}
arrRandom(-100, 100);

function arrContact(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i], 2);
        if ((arr[i] > 100)) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
console.log(arrContact(arr));