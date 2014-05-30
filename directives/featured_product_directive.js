(function(angular){
	'use strict';

	var app = angular.module('MyStore');

	app.directive('msFeaturedProducts', function() {
		return {
			scope: 	{
				product: '='
			},
			restrict: 	'E',
			replace: 	true,
			templateUrl: 	'templates/featured_products.html',
			link: 		function(scope, elem, attrs) {

			}
		};
	});
})(window.angular);