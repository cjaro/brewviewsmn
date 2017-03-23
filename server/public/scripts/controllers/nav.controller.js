app.controller('NavController', ['$firebaseAuth',  function($firebaseAuth){
  console.log('Nav Controller loaded');
  var self = this;
  var auth = $firebaseAuth();

  auth.$onAuthStateChanged(function(firebaseUser){
    self.userIsLoggedIn = !!firebaseUser;
    
  })







}]);
