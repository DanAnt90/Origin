var str = "Содержимое строки в JavaScript нельзя изменять. Нельзя взять символ посередине и заменить его. Как только строка создана – она такая навсегда."

function vowelsCounter(str) {
    var vowels = "аоэиуыеёюя";
    var counter = 0;

    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
            counter++;
        }

    }
    return counter;
}
alert("количество гласных букв в тексте составляет: " + vowelsCounter(str));