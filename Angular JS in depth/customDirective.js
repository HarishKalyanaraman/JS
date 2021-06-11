var app = angular.module("app", []);
app.controller('emp', ['$scope',function($scope){
    $scope.msg = "this is message from scope"
}]);
//A directive is 
app.directive("myInfoMsg", function(){   // custom directive
    return {
        templateUrl: "my-info-msg.html"
    }
})