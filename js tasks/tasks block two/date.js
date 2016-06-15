var date1 = new Date(2013, 0, 1);
var date2 = new Date(2013, 0, 1);

function date(date1, date2) {
    date1 = date1.getTime();
    date2 = date2.getTime();
    if (date1 < date2) {
        alert("первое событие было раньше");

    } else if (date1 > date2) {
        alert("второе событие было раньше");

    } else {
        alert("события произошли одновременно");
    }
}
date(date1, date2);