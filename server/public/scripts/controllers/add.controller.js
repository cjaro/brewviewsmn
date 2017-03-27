app.controller('AddController', ['$http','$location', 'DataFactory', function($http, $location, DataFactory){
    console.log('Add Controller loaded');
    var self = this;
    // self.testMessage = 'Can you hear me?';

    self.addNewBrew = function(newBrewObject) {
      console.log('newBrewObject: ', newBrewObject);
      $http.post('/brews', newBrewObject).then(function(response){
        $location.path('/main');
        console.log('response: ', response);
      });
    };

    self.addField = function(){
      console.log();
    };
    // self.removeField = function(){
    //   var lastItem = self./something/.length-1;
    //   self./something/.splice(lastItem);
    // };

    self.breweries = DataFactory.breweries;

}]);
