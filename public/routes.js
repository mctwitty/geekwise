(function(angular){
	var app = angular.module('MyStore');

	app.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				controller: 'HomeController',
				templateUrl: 'views/home.html'
			})
			.state('products', {
				url: '/products',
				controller: 'ProductList',
				templateUrl: 'views/product-list.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: '<h1>About</h1>'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: '<h1>Contact</h1>'
			})
			.state('product', {
			    url: '/product/:id',
			    controller: 'ProductDetail',
			    templateUrl: 'views/product_detail.html'
			})
			.state('cart', {
				url: '/cart',
				controller: 'CartController',
				templateUrl: 'views/cart.html'
			})
			.state('login', {
				url: '/login',
				controller: 'LoginController',
				templateUrl: 'views/login.html'
			})
			.state('signup', {
				url: '/signup',
				controller: 'SignupController',
				templateUrl: 'views/signup.html'
			});
	});
})(window.angular);