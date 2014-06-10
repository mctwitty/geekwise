(function(angular) {
	"use strict";
 
	var app = angular.module('MyStore');
 
	app.directive('msAddCartButton', function(CartService) {
 
		return {
			scope: {
				productId: '='
			},
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/add_cart_button.html',
			link: function(scope, elem, attr) {
 
				scope.cartSubtotal = CartService.getCartSubtotal;
 
				scope.itemCount = CartService.getItemCount;
			}
 
		};
	});
 
})(window.angular);