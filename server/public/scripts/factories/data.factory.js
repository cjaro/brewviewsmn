app.factory('DataFactory', ['$http', function($http){
  console.log('Data Factory loaded');

  var breweries = { list: [] };


  getBreweries();

  function getBreweries() {
    $http.get('/breweries').then(function(response){
      console.log(response.data);
      breweries.list = response.data;
    });
  }

  return {
    breweries: breweries
  }

}]);
