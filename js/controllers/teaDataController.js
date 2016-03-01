app.controller('teaDataController',[ '$scope', '$routeParams', '$http', 'shopCart', function($scope, $routeParams, $http, shopCart){
  $scope.add = shopCart.add;
  $scope.cart = shopCart.cart;
  $http.get('../json/teas.json').success(function(payload){
    $scope.teas = payload;
  })
}])
