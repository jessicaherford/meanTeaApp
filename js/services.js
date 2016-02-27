app.factory('teas', function($http){
        return {
          list: function(callback){
            $http.get('teas.json').success(callback);
    }
  };
});
