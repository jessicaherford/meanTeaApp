app.factory('teas', function($http){
        return {
          list: function(callback){
            $http.get('../json/teas.json').success(callback);
    }
  };
});
// /Users/jessicaherford/workspace/meanTeaApp/json/teas.json
