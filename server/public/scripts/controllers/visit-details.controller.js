app.controller('VisitDetailsController', ['$http', '$location','DataFactory', '$routeParams',
function ($http, $location, DataFactory, $routeParams) {
  console.log('Visit deets controller loaded');
  console.log($routeParams)
  var self = this;
  self.testVariable = 'I am a test!';
  self.visitList = [];
  self.visit = DataFactory.visit;
  DataFactory.getVisitDetails($routeParams.visitID);

  console.log('self.visit', self.visit);

  self.addNewBrew = function(newBrewObject) {
    console.log('newBrewObject: ', newBrewObject);
    $http.post('/visits/', newBrewObject).then(function(response){
      console.log('response: ', response);
    });
  };

  self.deleteBrew = function(brewID) {
    console.log('brewID to delete: ', brewID);
    $http.delete('/visits/' + brewID).then(function(response){
      getBrews();
    });
  };

  self.updateBrew = function(brew) {
    console.log('brew to update: ', brew);
    $http.put('/visits/' + brew.id, brew).then(function(response){
      getBrews();
    });
  };

  self.deleteVisit = function(visitID) {
    console.log('visitID to delete: ', visitID);
    $http.delete('/visits/' + visitID).then(function(response){
      getVisits();
    });
  };

  function getBrews() {
    $http.get('/visits/').then(function(response){
      console.log('response data: ', response.data);
      self.brewList = response.data;
    });
  };

}]);




// swal({
//   title: "Are you sure?",
//   text: "You will not be able to recover this imaginary file!",
//   type: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#DD6B55",
//   confirmButtonText: "Yes, delete it!",
//   cancelButtonText: "No, cancel plx!",
//   closeOnConfirm: false,
//   closeOnCancel: false
// },
// function(isConfirm){
//   if (isConfirm) {
//     swal("Deleted!", "Your imaginary file has been deleted.", "success");
//   } else {
//     swal("Cancelled", "Your imaginary file is safe :)", "error");
//   }
// });
