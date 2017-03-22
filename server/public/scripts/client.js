var app = angular.module('BrewApp', ['ngRoute','firebase']);
// '
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/main', {
    templateUrl: '/views/main.html',
    controller: 'MainController',
    controllerAs: 'hc'
  })
  .when('/add', {
    templateUrl: '/views/add.html',
    controller: 'AddController',
    controllerAs: 'ac'
  })
  .when('/explore', {
    templateUrl: '/views/explore.html',
    controller: 'ExploreController',
    controllerAs: 'ec'
  })
  .when('/login', {
    templateUrl: '/views/login.html',
    controller: 'LoginController',
    controllerAs: 'lc'
  })
  .otherwise({
    redirectTo: 'main'
  })
}]);
