app.factory('teas', function($http){
        return {
          list: function(callback){
            $http.get('../json/teas.json').success(callback);
    }
  };
});

app.filter('yesNo', function() {
    return function(input) {
        return input ? ' ' + 'Yes' : ' ' + '  No';
    }
})


app.service('shopCart', function(){
  alert("HI!");
  // var cart = {};
  // cart.addItem = function(name){
  //   var cartItem = {};
  //   cart.name = this.tea.name;
  //   cart.push(cartItem);
  // }
  // console.log(cart);
})
