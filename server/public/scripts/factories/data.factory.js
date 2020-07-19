app.factory('DataFactory', ['$http', function($http){
  console.log('data factory loaded');

  const visit = {details: {}};
  const brewery = {details: []};

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
