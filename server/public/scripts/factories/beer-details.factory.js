app.factory('BeerDetailsFactory', ['$http', function($http){
  console.log('beer details Factory loaded');

  var brew = { details: {} };

  function getBeerDetails(brewID) {
    console.log(brewID);
    $http({
      method: 'GET',
      url: '/beerDetails',
      params: {brewID: brewID}
    }).then(function(response){
      console.log(response.data);
      brew.details = response.data;
    });
  }

  return {
    brew: brew,
    getBeerDetails: getBeerDetails
    }

}]);
