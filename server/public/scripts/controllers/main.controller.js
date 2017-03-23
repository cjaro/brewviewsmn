app.controller('MainController', ['$http', 'DataFactory', '$location', '$firebaseAuth',  function($http, DataFactory, $location, $firebaseAuth){
  console.log('Main Controller loaded');
  var self = this;
  var auth = $firebaseAuth();
  // self.testVariable = 'am test';
  self.brewList = [];
  self.breweries = DataFactory.breweries;


  // self.logIn = function(){
  //   console.log('log in button clicked');
  //   DataFactory.logIn();
  // }

  self.logOut = function(){
    console.log('log out button fxn');
    DataFactory.logOut();
  }

  getBrews();

  function getBrews() {
    $http.get('/brews').then(function(response){
      console.log('response data: ', response.data);
      self.brewList = response.data;
    });
  }

  self.deleteBrew = function(brewID) {
    console.log('brewID to delete: ', brewID);
    $http.delete('/brews/' + brewID).then(function(response){
      getBrews();
    });
  }

//something is wrong with 'brew'
// fixed 3/21/17

  self.updateBrew = function(brew) {
      console.log('brew to update: ', brew);
    $http.put('/brews/' + brew.id, brew).then(function(response){
      getBrews();
    });
  }

  // logout function
  self.logOut = function(){
    auth.$signOut().then(function(){
    console.log('Logging out!');
    $location.path('/login')
     });
  };

}]);
