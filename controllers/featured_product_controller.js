(function(angular){
	"use strict";

	var app = angular.module('MyStore');
	app.controller('HomeController', function($scope, ProductService) {
		 $scope.featuredProducts = new Array();
		 ProductService.getProducts().then(
		 	function(response) {
		 		angular.forEach(response.data, function(product) {
		 			if (product.isFeatured === true) {
		 				$scope.featuredProducts.push(product);
		 			};
		 		});
		 	});
	});

})(window.angular);