app.controller('AddController', ['$http', 'DataFactory', function($http, DataFactory){
    console.log('Add Controller loaded');
    var self = this;
    // self.testMessage = 'Can you hear me?';

    self.addNewBrew = function(newBrewObject) {
      console.log('newBrewObject: ', newBrewObject);
      $http.post('/brews', newBrewObject).then(function(response){
        console.log('response: ', response);
      });
    }

    
    // self.addRating(function($scope) {
    // $scope.rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// });

    self.breweries = DataFactory.breweries;

}]);






// app.controller('BeerController', ['$http', function($http) {
//   var self = this;
//
//   self.beer = {};
//
//
//   // var api_key = '02a1d52d58a8c9afdd6917912acd2b10';
//   // var baseURL = "http://api.brewerydb.com/v2/";
//
//
//
//   // self.getRandomBeer = function() {
//   //   // create a URL
//   //   var query = baseURL + "pet.getRandom";
//   //   query += "?key=" + api_key;
//   //   query += "&animal=dog";
//   //   query += "&output=basic";
//   //   query += "&format=json";
//
//     // console.log('query to API: ', query);
//
//     // encode that URL
//     var request = query + "&callback=JSON_CALLBACK";
//     console.log(request);
//
//     // make ajax request
//     $http.jsonp(request).then(function(response) {
//       console.log('response: ', response.data);
//       self.dog = response.data.petfinder.pet;
//     });
//
//     // when request is completed, put info on the DOM
//   }
//
//     self.getRandomDog();
// }]);
