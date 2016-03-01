app.controller('cartController',[ '$scope','shopCart', function($scope, shopCart){

  $scope.cart = shopCart.cart;

  $scope.total = function () {
      var teaTotal = 0;
        for (var i = 0; i < $scope.cart.length; i++) {
          var teaTotal = $scope.cart[i].total;
        }
          return '$' + parseFloat(teaTotal).toFixed(2);
        }

  $scope.edit = function(){
    $scope.showEdit = !$scope.showEdit
  }

  $scope.delete = function (index) {
    $scope.cart.splice(index, 1);
    // return total();
  }

}])
