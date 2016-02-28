app.controller('teaDataController', function($scope, $routeParams, $http){
  $http.get('../json/teas.json').success(function(payload){
    $scope.teas = payload;
  })
})
