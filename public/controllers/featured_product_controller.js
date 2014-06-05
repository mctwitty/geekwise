(function(angular){
	"use strict";

	var app = angular.module('MyStore');
	app.controller('HomeController', function($scope, ProductService) {
		 $scope.featuredProducts = new Array();
		 ProductService.getFeaturedProducts().then(
		 	function(response){
		 		$scope.featuredProducts = response.data;
		 	});
		 // *** Pre-Mongo code ***
		 // ProductService.getFeaturedProducts().then(
		 // 	function(response) {
		 // 		angular.forEach(response.data, function(product) {
		 // 			if (product.isFeatured) {
		 // 				$scope.featuredProducts.push(product);
		 // 			};
		 // 		});
		 // 	});
	});

})(window.angular);