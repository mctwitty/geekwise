(function(angular){
	"use strict";
	var app = angular.module('MyStore');
	app.directive('msProductDetailsButton', function() {

		return {
			// E for Element
			// A for Attribute
			// C for Class
			scope: 		{
				// 3 types of binding for scope properties
				// @ = string
				// & = one-way binding
				// = = two-way binding
				productId: 	'@'
			},
			restrict: 	'E',
			replace: 	true,
			templateUrl: 	'templates/product_details_button.html',

		};
	});
})(window.angular);