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
 
	   //  $scope.addItem = function(item) {
		  //   // Add the item using the CartService
 			// CartService.addItem(item);
	   //  };
 
	   //  $scope.removeItem = function(item) {
		  //   // Remove the item using the CartService
 			// CartService.removeItem(item);
	   //  };
 
	   //  $scope.cartSubtotal = function() {
		  //   // Returns the cartSubtotal from the CartService
 			// CartService.getCartSubtotal();
	   //  };
 
	   //  $scope.cartTotal = function() {
		  //   // Returns the cartTotal from the CartService
		  //   CartService.getCartTotal();
	   //  };
 
    });
 
})(window.angular);