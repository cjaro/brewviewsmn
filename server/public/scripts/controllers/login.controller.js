app.controller('LoginController', ['$http', '$firebaseAuth', 'DataFactory', function( $firebaseAuth, $http, DataFactory){
    console.log('Login Controller loaded');
    var self = this;
    var auth = $firebaseAuth();


  self.logIn = function(){
    console.log('log in button clicked');
    DataFactory.logIn();
  }


  // This code runs whenever the user logs in
function logIn(){
  auth.$signInWithPopup("google").then(function(firebaseUser) {
    console.log("Firebase Authenticated: ", firebaseUser.user.displayName);
  }).catch(function(error) {
    console.log("Authentication failed: ", error);
  });
};


//TODO auth stuff here
//this is called inside auth onStateChanged
//headers????
// This code runs whenever the user changes authentication states
// e.g. whevenever the user logs in or logs out
// this is where we put most of our logic so that we don't duplicate
// the same things in the login and the logout code
auth.$onAuthStateChanged(function(firebaseUser){
  // firebaseUser will be null if not logged in
  if(firebaseUser) {
    // This is where we make our call to our server
    firebaseUser.getToken().then(function(idToken){
      $http({
        method: 'GET',
        url: '/privateData',
        headers: {
          id_token: idToken
        }
      }).then(function(response){
        self.secretData = response.data;
      });
    });
  } else {
    console.log('Not logged in or not authorized.');
    self.secretData = [];
  }

});


  // logout function
function logOut(){
    auth.$signOut().then(function(){
    console.log('Logging out!');
     });
  };




}]);






// $location
//
// redirecting
