function vowelsCounter(str) {
    var counter = 0;
    for (var i = 0; i <= str.length - 1; i++) {

        if (str.charAt(i) == "а" || str.charAt(i) == "о" || str.charAt(i) == "э" || str.charAt(i) == "и" || str.charAt(i) == "у" || str.charAt(i) == "ы" || str.charAt(i) == "е" || str.charAt(i) == "ё" || str.charAt(i) == "ю" || str.charAt(i) == "я") {
            counter += 1;
        }
    }
    return counter;
}
alert("количество гласных букв в тексте составляет: " + vowelsCounter("Содержимое строки в JavaScript нельзя изменять. Нельзя взять символ посередине и заменить его. Как только строка создана – она такая навсегда."));