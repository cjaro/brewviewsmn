app.controller('NavController', ['$http', 'DataFactory', '$location', '$firebaseAuth',  function($http, DataFactory, $location, $firebaseAuth){
  console.log('Nav Controller loaded');
  var self = this;
  var auth = $firebaseAuth();

  auth.$onAuthStateChanged(function(firebaseUser){
    self.userIsLoggedIn = !!firebaseUser;

  })


  // self.logOut = function(){
  //   console.log('log out button fxn');
  //   DataFactory.logOut();
  // }

  self.logOut = function(){
    auth.$signOut().then(function(){
    console.log('Logging out!');
    $location.path('/login')
     });
  };




}]);
