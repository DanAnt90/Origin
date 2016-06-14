var variableOne = +prompt("Введите число один");
var mathOperator = prompt("Введите математическое действие");
var variableTwo = +prompt("Введите число два");
var result;

if (isNaN(variableOne) == true || isNaN(variableTwo) == true) {
    alert("неверный ввод");
} else {
    switch (mathOperator) {
        case "+":
            result = variableOne + variableTwo;
            break;
        case "-":
            result = variableOne - variableTwo;
            break;
        case "*":
            result = variableOne * variableTwo;
            break;
        case "/":
            if (variableTwo != 0) {
                result = variableOne / variableTwo;
            } else {
                result = "на ноль делить нельзя"
            };
            break;
        default:
            result = "Введите правильное математическое действие";
            break;
    }
    alert(result);
}