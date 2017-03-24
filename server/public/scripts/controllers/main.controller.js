app.controller('MainController', ['$http', 'DataFactory', '$location', '$firebaseAuth',  function($http, DataFactory, $location, $firebaseAuth){
  console.log('Main Controller loaded');
  var self = this;
  var auth = $firebaseAuth();
  // var swl = sweetalert;
  // self.testVariable = 'am test';
  self.brewList = [];
  self.breweries = DataFactory.breweries;

  getBrews();

  function getBrews() {
    $http.get('/brews').then(function(response){
      console.log('response data: ', response.data);
      self.brewList = response.data;
    });
  }

  self.deleteBrew = function(brewID) {
    console.log('brewID to delete: ', brewID);

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

    $http.delete('/brews/' + brewID).then(function(response){
      getBrews();
    });
  }

//something is wrong with 'brew'
// fixed 3/21/17

  self.updateBrew = function(brew) {
    console.log('brew to update: ', brew);
    $http.put('/brews/' + brew.id, brew).then(function(response){
      getBrews();
    });
  }

}]);
