app.controller('BeerDetailsController', ['$http', '$location','BeerDetailsFactory', '$routeParams',
function ($http, $location, BeerDetailsFactory, $routeParams) {
  console.log('Beer deets controller loaded');
  console.log($routeParams)
  var self = this;
  self.testVariable = 'I am a test!';
  self.brewList = [];
  self.brew = BeerDetailsFactory.brew;
  // console.log(BeerDetailsFactory.brew);
  BeerDetailsFactory.getBeerDetails($routeParams.brewID);

  self.deleteBrew = function(brewID) {
    console.log('brewID to delete: ', brewID);
    $http.delete('/brews/' + brewID).then(function(response){
      $location.path('/main');
    });
  }
//the update & delete 'brew' has to change its name - brew is an object that's being returned & passed now
  self.updateBrew = function(brew) {
    console.log('brew to update: ', brew);
    $http.put('/brews/' + brew.id, brew).then(function(response){
      getBrews();
    });
  }

  function getBrews() {
    $http.get('/brews').then(function(response){
      console.log('response data: ', response.data);
      self.brewList = response.data;
    });
  }

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
