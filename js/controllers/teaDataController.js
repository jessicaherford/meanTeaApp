app.controller('teaDataController', function($scope, $routeParams, $http){
  $http.get('teas.json').success(function(data){
    console.log(data);
    $scope.teas = data;
  })
  teas.list(function(teas){
    $scope.teas = teas
  })
})
