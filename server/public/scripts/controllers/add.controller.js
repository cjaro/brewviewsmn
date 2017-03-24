app.controller('AddController', ['$http', 'DataFactory', function($http, DataFactory){
    console.log('Add Controller loaded');
    var self = this;
    // self.testMessage = 'Can you hear me?';

    self.addNewBrew = function(newBrewObject) {
      console.log('newBrewObject: ', newBrewObject);
      $http.post('/brews', newBrewObject).then(function(response){
        console.log('response: ', response);
      });
    }

    self.breweries = DataFactory.breweries;

}]);
