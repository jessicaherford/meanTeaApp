var app = angular.module('meanTeaApp',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.
  when('/', {
    templateUrl: 'index.html',
    controller: 'mainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })

})
