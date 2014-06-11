(function(angular) {
	"use strict";
 
	var app = angular.module('MyStore');
 
	app.directive('msAddCartButton', function(CartService) {
 
		return {
			scope: {
				product: '='
			},
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/add_cart_button.html',
			link: function(scope, elem, attr) {
 				scope.addItem = CartService.addItem;
			}
 
		};
	});
 
})(window.angular);