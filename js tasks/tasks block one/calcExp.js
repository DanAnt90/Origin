var variableOne = +prompt("Введите число один");
var mathOperator = prompt("Введите математическое действие");
var variableTwo = +prompt("Введите число два");
var result;
var calc;


if (isNaN(variableOne) == true || isNaN(variableTwo) == true) {
    alert("неверный ввод");
} else {
    if (mathOperator == "+") {
        calc = function() {
            result = variableOne + variableTwo;

        }
    } else if (mathOperator === "-") {
        calc = function() {
            result = variableOne - variableTwo;

        }
    } else if (mathOperator === "*") {
        calc = function() {
            result = variableOne * variableTwo;

        }
    } else if (mathOperator === "/") {
        calc = function() {
            if (variableTwo != 0) {
                result = variableOne / variableTwo;
            } else {
                result = "на ноль делить нельзя"

            };
        }
    } else {
        result = "Введите правильное математическое действие";

    }
    alert(result);
}
calc();