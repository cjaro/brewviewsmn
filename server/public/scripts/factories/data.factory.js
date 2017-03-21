app.factory('DataFactory', ['$http',  function($http){
  console.log('Data Factory loaded');

// '$firebaseAuth',
// , $firebaseAuth

  // var self = this;
  // var auth = $firebaseAuth();
  var brewery = { list: [] };


//TODO auth stuff here

// This code runs whenever the user changes authentication states
// e.g. whevenever the user logs in or logs out
// this is where we put most of our logic so that we don't duplicate
// the same things in the login and the logout code
//
// auth.$onAuthStateChanged(function(firebaseUser){
// // firebaseUser will be null if not logged in
//   if(firebaseUser) {
//   // This is where we make our call to our server
//     firebaseUser.getToken().then(function(idToken){
//       getBreweries();
//       })
//     //   .then(function(response){
//     //     self.secretData = response.data;
//     // });
//   } else {
//     console.log('Not logged in or not authorized.');
//     self.secretData = [];
//   }
// });

getBreweries();

//this is called inside auth onStateChanged
//headers????

  function getBreweries() {
    $http.get('/breweries').then(function(response){
      console.log('factory response.data: ', response.data);
      brewery.list = response.data;
    });
  }

  // This code runs whenever the user logs in
  function logIn(){
  auth.$signInWithPopup("google").then(function(firebaseUser) {
    console.log("Firebase Authenticated as: ", firebaseUser.user.displayName);
  }).catch(function(error) {
    console.log("Authentication failed: ", error);
  });
};

  // logout function
  function logOut(){
    auth.$signOut().then(function(){
    console.log('Logging the user out!');
     });
  };

  return {
    logIn: logIn,
    logOut: logOut,
    breweries: brewery
  }

}]);
