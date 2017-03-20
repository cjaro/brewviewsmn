app.factory('DataFactory', ['$http', function($http){
  console.log('Data Factory loaded');

  var brewery = { list: [] };

  getBreweries();

  function getBreweries() {
    $http.get('/breweries').then(function(response){
      console.log(response.data);
      brewery.list = response.data;
    });
  }

  return {
    breweries: brewery
  }

}]);
