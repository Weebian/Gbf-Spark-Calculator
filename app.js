(function (angular) {
    //Get the module
    var module = angular.module('gbfCalc', []);

    //Calculate
    module.controller('calcController', ['$scope', function ($scope) {
        //Set initial values
        $scope.result1 = 0;
        $scope.result2 = 300;
        $scope.crystal_num = 0;
        $scope.ten_draw_tickets = 0;
        $scope.solo_draw_tickets = 0;
        $scope.spark_num = 0;

        //Adjust results
        $scope.result = function () {
            $scope.result1 = Math.floor(Number($scope.crystal_num) / 300) + Number($scope.ten_draw_tickets * 10) + Number($scope.solo_draw_tickets) + Number($scope.spark_num);
            $scope.result2 = 300 - $scope.result1;
        };
    }]);
}(angular));


