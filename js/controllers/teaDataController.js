app.controller('teaDataControllerList', function($scope, teas){
  teas.list(function(countries){
    $scope.teas = teas;
  })
})

app.controller('teaDataController', function($scope, $routeParams, $http){
  $http.get('../json/teas.json').success(function(data){
    console.log(data);
    $scope.tea = data.filter(function(each){
      return each.name === $routeParams.teaName
    })[0];
  })
})
// meanTeaApp/json/teas.json
