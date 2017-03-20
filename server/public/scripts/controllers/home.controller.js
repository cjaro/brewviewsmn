app.controller('HomeController', ['$http', 'DataFactory', function($http, DataFactory){
  console.log('Home Controller loaded');
  var self = this;
  // self.testVariable = 'am test';
  self.brewList = [];
  self.breweries = DataFactory.breweries;

  getBrews();

  function getBrews() {
    $http.get('/brews').then(function(response){
      console.log(response.data);
      self.brewList = response.data;
    });
  }



  self.deleteBrew = function(brewID) {
    $http.delete('/brews/' + brewID).then(function(response){
      getBrews();
    });
  }

// something straight up not working here
//something is wrong with 'brew'

  self.updateBrew = function(brew) {
      console.log(brew);
    $http.put('/brews/' + brew.brew_id, brew).then(function(response){
      getBrews();
    });
  }
}]);
