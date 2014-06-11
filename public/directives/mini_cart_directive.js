(function(angular) {
	"use strict";
 
	var app = angular.module('MyStore');
 
	// Inject in the CartService
	app.directive('msMiniCart', function(CartService) {
 
		return {
			scope: {
			},
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/mini_cart.html',
			link: function(scope, elem, attr) {
 
				scope.cartSubtotal = function() {
					// Returns the subtotal from the CartService
 					return CartService.getCartSubtotal();
				};
 
				scope.getItemCount = function() {
					// Return the item count from the CartService
					return CartService.getItemCount(); // static value to display cart temporarily
				};
			}
 
		};
	});
 
})(window.angular);