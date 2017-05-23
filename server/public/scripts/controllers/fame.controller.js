app.controller('FameController', ['$http', 'DataFactory', 'AuthFactory', '$location', '$firebaseAuth', '$routeParams',
  function($http, DataFactory, AuthFactory, $location, $firebaseAuth, $routeParams) {
    console.log('hall of fame controller loaded');
      var self = this;
      var auth = $firebaseAuth();
      self.brewery = [];
      console.log('self.breweries', self.breweries); //returning empty array list


        getHallOfFame()

        function getHallOfFame() {
          $http.get('/breweries').then(function(response) {
            console.log('response data: ', response.data);
            self.brewery = response.data;
          });
        };


  }

]);
