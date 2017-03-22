app.factory('DataFactory', ['$http', function($http){
  console.log('Data Factory loaded');
  var self = this;
  var brewery = { list: [] };

getBreweries();

function getBreweries() {
    $http.get('/breweries').then(function(response){
      // console.log('factory response.data: ', response.data);
      brewery.list = response.data;
    });
  }

  return {
    breweries: brewery
  }

}]);
