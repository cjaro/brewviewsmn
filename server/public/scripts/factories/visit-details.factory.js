app.factory('VisitDetailsFactory', ['$http', function($http){
  console.log('Visit details Factory loaded');

  var visit = { details: {} };
  var brewery = { list: [] };

  function getVisitDetails(visitID) {
    console.log('visit ID is ',visitID);
    $http({
      method: 'GET',
      url: '/visitDetails',
      params: {visitID: visitID}
    }).then(function(response){
      console.log("response data", response.data);
      visit.details = response.data;
    });
  }
  console.log("visit.details = ", visit.details);

console.log('brewery', brewery);

  getBreweries();

  function getBreweries() {
    $http.get('/breweries').then(function(response){
      // console.log('factory response.data: ', response.data);
      brewery.list = response.data;
    });
  }


  return {
    breweries: brewery,
    visit: visit,
    getVisitDetails: getVisitDetails
  }

}]);
