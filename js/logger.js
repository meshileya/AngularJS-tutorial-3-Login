'use strict';
/*
We want to write a function which will communicate with our php file
for user authentication.
*/
var app = angular.module('myapp', [])
        app.controller('empcontroller', function($scope, $http){
  $scope.insertdata=function(){
    console.log("triggered");
 $http.post("login.php",{'theusername':$scope.user, 'thepassword':$scope.pswd})


  .success(function(data, status, headers, config) {
        var mssg = data.MESSAGE;
        
        console.log(data);      
        if(data.trim()==='correct'){
          
          window.location.href = 'homes.html';
        } else {
          $scope.errorMsg = "Login not correct";
        }
      })
      .error(function(data, status, headers, config) {
        $scope.errorMsg = 'Unable to LOGIN';
      })
            
  }});