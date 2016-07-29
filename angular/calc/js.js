var CalculatorApp = angular.module('CalculatorApp', []);
CalculatorApp.controller('CalculatorController', function($scope) {

    $scope.num = {
        numone: 1,
        numtwo: 1,
    }
    $scope.x = 0;
    
    $scope.plus = function() {
        $scope.x = +(this.num.numone) + +(this.num.numtwo);
    };
    $scope.subtraction = function() {
        $scope.x = +(this.num.numone) - +(this.num.numtwo);
    };
    $scope.multiply = function() {
        $scope.x = +(this.num.numone) * +(this.num.numtwo);
    };
    $scope.divide = function() {
        $scope.x = +(this.num.numone) / +(this.num.numtwo);
    };
    $scope.result = function() {
        return $scope.x;

    };
});