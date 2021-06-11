var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/sumurl/:a/:b', {
        templateUrl: 'sumurl.html',
        controller:"sumurl"
    })
    .when('/suminput', {
        templateUrl: 'suminput.html',
        controller:"suminput"
    })
    .when('/', {
        template: '<b>Welcome to the APP</b><br><i>CLick on the links</i>'
    })
    .otherwise({
        template:'<b>No content available</b>'
    })
});

app.controller('sumurl', function($scope, $routeParams){ //$routeParams gives access to url parameters
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
})

app.controller('suminput', function($scope, $location, $interpolate){ 
    $scope.a = 0;
    $scope.b = 0;
    $scope.doSum = function(){
        var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope);
        console.log(url);
        $location.path(url);
    }
})