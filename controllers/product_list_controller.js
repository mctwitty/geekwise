(function(angular){
	"use strict";

	var app = angular.module('MyStore');

	app.controller('ProductList', function($scope, $http) {
		
		var errorCallback = function(reason) {
			$scope.errorMessage = reason.statusText;
		};

		$http.get('assets/json/products.json')
			.then(
				function(response){
					$scope.products = response.data;
				},
				errorCallback
				);
		$http.get('assets/json/product_filters.json')
			.then(
				function(response){
					$scope.filters = response.data;
				},
				errorCallback
				);

	});

})(window.angular);