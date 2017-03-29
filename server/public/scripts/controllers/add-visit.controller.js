app.controller('AddVisitController', ['$http','$location', 'DataFactory', function($http, $location, DataFactory){
    console.log('Add Visit Controller loaded');
    var self = this;
    // self.items = [];
    // self.testMessage = 'Can you hear me?';

    self.addNewVisit = function(newVisitObject) {
      console.log('newVisitObject: ', newVisitObject);
      $http.post('/visits', newVisitObject).then(function(response){
        var visitUrl = '/visit/'+response.data.id;
        $location.url(visitUrl);
        // $location.path('/addBrew');
        console.log('response: ', response);
      });
    };

    // self.addField = function(){
    //   var newItem = self.items.length+1;
    //   console.log(newItem);
    //   $('.addNewButton').on('click', function(){
    //     console.log('add button clicked');
    //   })
    //   self.push({
    //
    //   })
    // };
    // self.removeField = function(){
    //   var lastItem = self.items.length-1;
    //   self.items.splice(lastItem);
    // };

    self.breweries = DataFactory.breweries;

}]);
