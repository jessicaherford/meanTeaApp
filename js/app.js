var app = angular.module('meanTeaApp',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/allteas.html',
    controller: 'teaDataController'
  })
  .when('/cart',{
    templateUrl: 'templates/cart.html',
  })

})
