app.controller('AddBrewController', ['$http','$location', 'DataFactory', function($http, $location, DataFactory){
    console.log('Add Brew Controller loaded');
    var self = this;
    // self.testMessage = 'Can you hear me?';

    self.addNewBrew = function(newBrewObject) {
      console.log('newBrewObject: ', newBrewObject);
      $http.post('/visit', newBrewObject).then(function(response){
        console.log('response: ', response);
      });
    };

    self.breweries = DataFactory.breweries;
}]);
