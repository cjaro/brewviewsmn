app.controller('AddController', ['$http','$location', 'DataFactory', function($http, $location, DataFactory){
    console.log('Add Controller loaded');
    var self = this;
    self.items = [];
    // self.testMessage = 'Can you hear me?';

    self.addNewBrew = function(newBrewObject) {
      console.log('newBrewObject: ', newBrewObject);
      $http.post('/brews', newBrewObject).then(function(response){
        $location.path('/main');
        console.log('response: ', response);
      });
    };

    // self.addField = function(){
    //   var newItem = self.items.length+1;
    //   console.log(newItem);
    //   $('.addNewButton').on('click', function(){
    //     console.log('add button clicked');
    //   })
    //   self.push({
    //
    //   })
    // };
    // self.removeField = function(){
    //   var lastItem = self.items.length-1;
    //   self.items.splice(lastItem);
    // };

    self.breweries = DataFactory.breweries;

}]);
