function vowelsCounter(str) {
    var vowels = "аоэиуыеёюяАОЭИУЫЕЁЮЯ";
    var counter = 0;

    for (var i = 0; i < str.length - 1; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            counter += 1;
        }

    }
    return counter;
}
alert("количество гласных букв в тексте составляет: " + vowelsCounter("Содержимое строки в JavaScript нельзя изменять. Нельзя взять символ посередине и заменить его. Как только строка создана – она такая навсегда."));