// //module creation
// var myapp = angular.module('myModule', []);

// //creating controller
// var myController = function($scope){ //$scope is an object accessible to controllers and views
//     $scope.message = "Hello world";
// }
// var myController1 = function($scope){       // $scope accessible to all controllers and views
//     $scope.message = "Second Controller";
// }
// //conect the module with the controller
// myapp.controller("myController", myController)
// myapp.controller("myController1", myController1)


//module
var myapp = angular.module('myModule',[]);

///connect the module with the controller
myapp.controller("myController", function($scope){
    // $scope.message = "Hello World";
    var employee = {
        firstName:"John",
        lastName:"Wick",
        dept: "Sales"
    }

    $scope.employee = employee;
})
myapp.controller("myController1", function($scope){
    $scope.message = "Second Controller";
})



//Directives = custom HTML tags, attributes
