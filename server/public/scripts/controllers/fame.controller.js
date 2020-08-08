app.controller('FameController', ['$http', 'DataFactory', 'AuthFactory', '$location', '$firebaseAuth', '$routeParams',
  function($http, DataFactory, AuthFactory, $location, $firebaseAuth, $routeParams) {
    console.log('hall of fame controller loaded');
    const self = this;
    const auth = $firebaseAuth();
    self.brewery = [];
    console.log('self.brewery', self.brewery);

    getHallOfFame()

    function getHallOfFame() {
      $http.get('/breweries').then(function(response) {
        console.log('response data: ', response.data);
        self.brewery = response.data;
      });
    }
  }
]);
