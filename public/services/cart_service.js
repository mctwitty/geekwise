(function(angular) {
	"use strict";
 
	var app = angular.module('MyStore');
 
	app.factory('CartService', function($http) {
 
		// Private items variable
		var items = {};
 
		// Angular factories return service objects
		return {
 
			getItems: function() {
				// Returns items array
 				return items;
			},
			addItem: function(item) {
				if(!items[item.guid]) {
					item.quantity = 1;
					items[item.guid] = item;
				}
				else {
					items[item.guid].quantity += 1;
				}
			},
			removeItem: function(item_id) {
				// Removes an item from the items array
				// Can use angular.forEach(array, function(item, index) to splice
 				delete items[item_id];
			},
			emptyCart: function() {
				// Sets items array to empty array
 				return items = {};
			},
			getItemCount: function() {
				// returns number of items, including item quantity
 				var total = 0;
 				angular.forEach(items, function(item) {
 					var x = isNaN(parseInt(item.quantity)) ? 0 : parseInt(item.quantity);
 					total += x;
 				});
 				return total;
			},
			getCartSubtotal: function() {
				// Return the item quantity times item price for each item in the array
				var subtotal = 0;
				angular.forEach(items, function(item) {
					var x = isNaN(parseInt(item.quantity)) ? 0 : parseInt(item.quantity);
					subtotal += x * parseFloat(item.isSpecial ? item.specialPrice : item.price);
				});
				return subtotal;
			},
			getCartTotal: function() {
				// Return the cartSubtotal plus shipping and handling
				var total = 0;
				angular.forEach(items, function(item) {
					total += parseInt(item.quantity) * parseFloat(item.isSpecial ? item.specialPrice : item.price);
				});
				return total;
			}
		};
 
	});
 
})(window.angular);