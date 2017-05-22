app.controller('LoginController', ['AuthFactory','DataFactory', '$scope', function(AuthFactory, DataFactory, $scope) {
  var self = this;
  self.login = AuthFactory.logIn;
  self.logout = AuthFactory.logOut;
  self.user = AuthFactory.userInfo;
  // self.loggedIn = AuthFactory.newLoggedIn; // doesn't work -- trying to use self.loggedIn on client side for ng-if
}]);
