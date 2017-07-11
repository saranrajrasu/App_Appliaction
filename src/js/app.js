/**
 * @author Saran
 * @date 18-MAY-2017
 */
var app = angular.module('apps', ['ngRoute']); //, 'blockUI'

   // configure our routes
   app.config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider) {
   $httpProvider.defaults.withCredentials = true;
       $routeProvider
            .when('/home', {
                         templateUrl : 'src/views/home.html',
                         controller  : 'HomeController'
                     })
            .when('/category', {
                         templateUrl : 'src/views/categoryPage.html',
                         controller : 'CategoryController'
                     })
            .when('/url', {
                         templateUrl : 'src/views/urlPage.html'
                     })
          .otherwise('/');
   }]);