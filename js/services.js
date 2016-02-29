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


app.service('shopCart', ['$http', function($http) {
  var cart = [];
  this.cart = cart;
  this.add = function(quantity) {
  var item = {};
  item.name = this.tea.name;
  item.ingredients = this.tea.ingredients;
  item.caffeineScale = this.tea.caffeineScale;
  item.price = this.tea.price;
  item.picture = this.tea.imageUrl;
  item.categories = this.tea.categories;
  item.rating = this.tea.rating;
  item.total = this.tea.price * quantity;
  item.quantity = parseFloat(quantity);
  cart.push(item)
  console.log(cart);
  }
  }])
