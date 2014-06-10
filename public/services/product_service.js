(function(angular) {
	'use strict';
	var app = angular.module('MyStore');

	app.factory('ProductService', function($http) {
		return{
			getProduct: function(guid) {
				return $http.get('/api/product'+guid);
			}, 
			getProducts: function() {
				return $http.get('/api/products');
			},
			getProductFilters: function () {
				return $http.get('assets/json/product_filters.json');
			},
			getFeaturedProducts: function() {
				return $http.get('/api/products?featuredproducts=true');
			}
		};
	});

})(window.angular);