var app = angular.module('BrewApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: '/views/home.html',
    controller: 'HomeController',
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
  .otherwise({
    redirectTo: 'home'
  })
}]);
