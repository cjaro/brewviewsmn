app.factory('VisitDetailsFactory', ['$http', function($http){
  console.log('Visit details Factory loaded');

  var visit = { details: {} };

  function getVisitDetails(visitID) {
    console.log(visitID);
    $http({
      method: 'GET',
      url: '/visitDetails',
      params: {visitID: visitID}
    }).then(function(response){
      console.log(response.data);
      visit.details = response.data;
    });
  }

  return {
    visit: visit,
    getVisitDetails: getVisitDetails
    }

}]);
