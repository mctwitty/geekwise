(function(angular) {
 
    var app = angular.module('MyStore');
 
	// Inject in the CartService
    app.controller('CartController', function($scope) {
 
	    // Set the items on the scope to the items in the CartService
	    $scope.items;
 
	    $scope.addItem = function(item) {
		    // Add the item using the CartService
 			CartService.addItem(item);
	    };
 
	    $scope.removeItem = function(item) {
		    // Remove the item using the CartService
 			CartService.removeItem(item);
	    };
 
	    $scope.cartSubtotal = function() {
		    // Returns the cartSubtotal from the CartService
 			CartService.getCartSubtotal();
	    };
 
	    $scope.cartTotal = function() {
		    // Returns the cartTotal from the CartService
		    CartService.getCartTotal();
	    };
 
    });
 
})(window.angular);