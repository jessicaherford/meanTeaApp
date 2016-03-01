app.controller('cartController',[ '$scope','shopCart', function($scope, shopCart){

  $scope.cart = shopCart.cart;

  $scope.total = function () {
      var teaTotal = 0;
        for (var i = 0; i < $scope.cart.length; i++) {
          var teaTotal = $scope.cart[i].total;
        }
          return '$' + parseFloat(teaTotal/100).toFixed(2);
        }



  $scope.delete = function (index) {
    $scope.cart.splice(index, 1);
  }

  $scope.update = function(){
    item.total;
  }

}])
