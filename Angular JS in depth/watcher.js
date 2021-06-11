var app = angular.module('app',[])
app.controller('msg', function($scope, $rootScope){ //rootscope is global

    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 3;

    $scope.$watch('a', function(newV,oldV){
        if(newV!=oldV){
            console.log('a modified to ' + newV)
        }
    })
    $scope.$watch('b', function(newV,oldV){
        if(newV!=oldV){
            console.log('b modified to ' + newV)
        }
    })
    $scope.$watch('c', function(newV,oldV){
        if(newV!=oldV){
            console.log('c modified to ' + newV)
            if($scope.c>50){
                $scope.a = 1000;
            }
        }
    })

    $rootScope.$watch(function(){ //digest process starts from root scope
        console.log('--digest iteration started--')
    })

    // $scope.emps = [
    //     {empno:"1001", ename:"John"},
    //     {empno:"1002", ename:"Jim"},
    //     {empno:"1003", ename:"Will"},
    //     {empno:"1004", ename:"Shawn"},
    // ]
    // $scope.addEmp = function(){
    //     var newEmpNo = 1000 + $scope.emps.length +1;
    //     var newEname = "ename" + newEmpNo;

    //     $scope.emps.push({empno:newEmpNo, ename:newEname})
    // }

    // $scope.modify3rdEmp = function(){
    //     $scope.emps[2].ename = "Test";
    // }

    // //Deep or Equality watch
    // $scope.$watch('emps', function(newV,oldV){
    //     console.log("No of Employees: " + $scope.emps.length)
    // },true)
    
    // $scope.$watchCollection('emps', function(newV,oldV){ //Collection watch
    //     console.log("No of Employees: " + $scope.emps.length)
    // })
    
    
    
    
    
    
    
    
    
    // $scope.o = {
    //     a:1,
    //     b:2,
    //     c:3
    // }

    // $scope.$watch("o", function(newV,oldV){ //Equality watch - watches the values inside the object also
    //     if(newV!=oldV){
    //         $scope.o.c = $scope.o.a * $scope.o.b;
    //     }
    // }, true) //adding true to reference watch to convert it into equality watch
    
    // $scope.$watchGroup(['o.a', 'o.b'], function(newV,oldV){ //Equality watchgroup - watches the object values
    //     if(newV!=oldV){
    //         $scope.o.c = $scope.o.a * $scope.o.b;
    //     }
    // })
    
    // $scope.$watch("o", function(newV,oldV){ //Reference watch - watches the object o as a whole
    //     if(newV!=oldV){
    //         $scope.o.c = $scope.o.a * $scope.o.b;
    //     }
    // })
    // $scope.a = 1;
    // $scope.b = 2;
    // $scope.c = 3;

    // $scope.updateC = function(){
    //     $scope.c = $scope.a * 4;
    // }
    // $scope.$watchGroup(['a','b'], function(newValue, oldValue){ //Group watch
    //     if(newValue != oldValue){
    //         $scope.c = $scope.a * $scope.b
    //         console.log($scope)
    //     }
    // })
    // $scope.$watch("b", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.c = $scope.b * 2;
    //     }
    // })
    // $scope.$watch("a", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.b = $scope.a * 10;
    //     }
    // })
});