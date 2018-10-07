var browserName=navigator.appName; 

var mapp = angular.module('Portfolio', []);
mapp.controller('ctWelcome', function ($scope) {
	$scope.Title = "asppans";
	$scope.WelcomeMessage = "// hello world";
	$scope.CurrDate = ((new Date()).getMonth()+1) + "/" + (new Date()).getDate() + "/" + ((browserName != "Microsoft Internet Explorer")  ? (new
	Date().getYear() + 1900) : (new Date().getYear())); 
});