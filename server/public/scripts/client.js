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
    templateUrl: '/views/add-visit.html',
    controller: 'AddVisitController',
    controllerAs: 'avc'
  })
  .when('/addBrew', {
    templateUrl: '/views/add-brew.html',
    controller: 'AddBrewController',
    controllerAs: 'abc'
  })
  .when('/login', {
    templateUrl: '/views/login.html',
    controller: 'LoginController',
    controllerAs: 'lc'
  })
  .when('/suggestion', {
    templateUrl: '/views/suggestion.html',
  })
  .when('/visits/:visitID', {
  templateUrl: '/views/visit-details.html',
  controller: 'VisitDetailsController',
  controllerAs: 'vdc'
})
  .otherwise({
    redirectTo: 'login'
  })
}]);
