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
    newBrewObject.visit_id = $routeParams.visitID;
    console.log('newBrewObject: ', newBrewObject);
    $http.post('/visitDetails' , newBrewObject).then(function(response){
      self.newBeer={};
      console.log('response: ', response);
      DataFactory.getVisitDetails($routeParams.visitID);
    });
  };

  self.deleteBrew = function(brewID) {
    console.log('brewID to delete: ', brewID);
    // console.log('visitID', visitID);
    $http.delete('/visitDetails/' + brewID).then(function(response){
      DataFactory.getVisitDetails($routeParams.visitID);
    });
  };

  self.updateBrew = function(brew) {
    console.log('brew to update: ', brew);
    $http.put('/visitDetails/' + brewID, brew).then(function(response){
      DataFactory.getVisitDetails($routeParams.visitID);
    });
  };

  self.deleteVisit = function(visitID) {
    console.log('visitID to delete: ', visitID);
    $http.delete('/visits/' + visitID).then(function(response){
      $location.url('/main');
    });
  };

  // function getBrews() {
  //   $http.get('/visits/' + visitID).then(function(response){
  //     console.log('response data: ', response.data);
  //     self.brewList = response.data;
  //   });
  // };

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
