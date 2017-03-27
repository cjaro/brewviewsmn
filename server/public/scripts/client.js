var app = angular.module('BrewApp', ['ngRoute','firebase']);
// 'ui.bootstrap',
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/main', {
    templateUrl: '/views/main.html',
    controller: 'MainController',
    controllerAs: 'mc'
  })
  .when('/add', {
    templateUrl: '/views/add.html',
    controller: 'AddController',
    controllerAs: 'ac'
  })
  .when('/login', {
    templateUrl: '/views/login.html',
    controller: 'LoginController',
    controllerAs: 'lc'
  })
  .when('/suggestion', {
    templateUrl: '/views/suggestion.html',
  })
  .when('/brews/:brewID', {
  templateUrl: '/views/beer-details.html',
  controller: 'BeerDetailsController',
  controllerAs: 'bdc'
})
  .otherwise({
    redirectTo: 'login'
  })
}]);
