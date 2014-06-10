(function(angular) {
	"use strict";
 
	var app = angular.module('MyStore');
 
	app.factory('CartService', function($http) {
 
		// Private items variable
		var items = [];
 
		// Angular factories return service objects
		return {
 
			getItems: function() {
				// Returns items array
 				return items;
			},
 
			addItem: function(item) {
				// Checks if item already exists
				// If it exists, updates the quantity
				// If it doesn't exist, adds quantity property with value of 1 then
				// pushes the item onto the items array
				angular.forEach(item, function(item2) {
					if(item.id === item2.id) {
						updateItem(item2);
						return;
					}
					
				});
				item.quantity = 1;
				items.push(item);
 
			},
 
			updateItem: function(item) {
				// Updates the quantity of an item
 				angular.forEach(item, function(item2) {
 					if(item.id === item2.id) {
 						item2.quantity = item.quantity;
 					}
 				});
			},
 
			removeItem: function(item_id) {
				// Removes an item from the items array
				// Can use angular.forEach(array, function(item, index) to splice
 				angular.forEach(items, function(item, index) {
 					if(item_id===item.id) {
 						items.splice(index);
 					}
 				});
			},
 
			emptyCart: function() {
				// Sets items array to empty array
 				return items = [];
			},
 
			getItemCount: function() {
				// returns number of items, including item quantity
 				var total = 0;
 				angular.forEach(items, function(item) {
 					total += item.quantity;
 				});
 				return total;
			},
 
			getCartSubtotal: function() {
				// Return the item quantity times item price for each item in the array
				var subtotal = 0;
				angular.forEach(items, function(item) {
					if (item.isSpecial) {
						subtotal += item.quantity * item.specialPrice;
					}
					else {
						subtotal += item.quantity * item.price;
					}
				});
				return subtotal;
			},
 
			getCartTotal: function() {
				// Return the cartSubtotal plus shipping and handling
				var total = CartService.getCartSubtotal() + 0;
			}
		};
 
	});
 
})(window.angular);