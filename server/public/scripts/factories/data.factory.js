app.factory('DataFactory', ['$http', function($http){
  console.log('data factory loaded');

  var visit = { details: {} };
  var brewery = { details: [] };

  function getVisitDetails(visitID) {
    console.log('visit ID is ', visitID);
    $http({
      method: 'GET',
      url: '/visitDetails',
      params: {visitID: visitID}
    }).then(function(response){
      console.log("response data", response.data);
      visit.details = response.data;
    });
  }

  return {
    breweries: brewery,
    visit: visit,
    getVisitDetails: getVisitDetails
  }

}]);

//   function updateDetails() {
//     $http({
//       method: 'PUT',
//       url: '/visits/' + visitID
//     }).then(function(response) {
//       getVisitDetails();
// });
// }
//   }

// function getBreweries() {
//   $http.get('/breweries').then(function(response){
//     console.log('factory response.data: ', response.data);
//     breweries.list = response.data;
//     console.log('breweries.list', breweries.list);
//   });
// }
