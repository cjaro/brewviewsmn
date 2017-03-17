app.factory('DataFactory', ['$http', function($http){
  console.log('Data Factory loaded');

  var my_brewery_db = { list: [] };


  getmy_brewery_db();

  function getmy_brewery_db() {
    $http.get('/breweries').then(function(response){
      console.log(response.data);
      my_brewery_db.list = response.data;
    });
  }

  return {
    my_brewery_db: my_brewery_db
  }

}]);
