var app = angular.module('meanTeaApp',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.
  when('/', {
    templateUrl: 'templates/allteas.html',
    controller: 'teaDataController'
  })
  .otherwise({
    redirectTo: '/'
  })

})


// module.filter('yesNo', function() {
//     return function(input) {
//         return input ? 'yes' : 'no';
//     }
// }
