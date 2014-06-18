(function(angular) {
	"use strict";
 
    var app = angular.module('MyStore');
 
	// Inject in the CartService
    app.controller('CartController', function($scope, CartService) {
 
	    // Set the items on the scope to the items in the CartService
	    $scope.items 			= CartService.getItems();
	    $scope.getItemCount 	= CartService.getItemCount;
	    $scope.removeItem		= CartService.removeItem;
	    $scope.emptyCart		= CartService.emptycart;
	    $scope.cartSubtotal 	= CartService.getCartSubtotal;
	    $scope.cartTotal 		= CartService.getCartTotal;
 
	  	// $scope.$watchCollection('items', function(newItems, oldItems) {
	  	// 	if(newItems) {
	  	// 		angular.forEach(newItems, function(item,key) {
		  // 			if(item.quantity == 0 || item.quantity == '') {
		  // 				CartService.removeItem(item.guid);
	  	// 			}
	  	// 		});
	  	// 	}
	  	// });
 
    });
 
})(window.angular);