var app = angular.module('meanTeaApp',['ngRoute' ]);
// var app = angular.module('meanTeaApp',['ngRoute', 'xeditable' ]);


app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/allteas.html',
    controller: 'teaDataController'
  })
  .when('/cart',{
    templateUrl: 'templates/cart.html',
    controller: 'cartController'
  })

})


  // app.run(function(editableOptions) {
  //   editableOptions.theme = 'default'; // bootstrap3 theme. Can be also 'bs2', 'default'
  // });
