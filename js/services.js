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
