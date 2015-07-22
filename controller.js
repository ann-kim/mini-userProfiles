var app = angular.module("userProfiles");

app.controller("userProfiles").controller("MainController", function($scope, service){
	$scope.users = service.getUsers();
});