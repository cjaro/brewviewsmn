app.controller('NavController', ['$http', 'DataFactory', '$location', '$window', '$firebaseAuth',  function($http, DataFactory, $location, $window, $firebaseAuth){
  console.log('nav controller loaded');
  const self = this;
  const auth = $firebaseAuth();

  auth.$onAuthStateChanged(function(firebaseUser){
    self.userIsLoggedIn = !!firebaseUser;
  })

  self.logOut = function(){
    auth.$signOut().then(function(){
    console.log('Logging out!');
    $location.path('/login');
    $window.location.reload();
     });
  };

}]);
