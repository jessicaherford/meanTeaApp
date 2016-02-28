app.factory('teas', function($http){
        return {
          list: function(callback){
            $http.get('../json/teas.json').success(callback);
    }
  };
});
