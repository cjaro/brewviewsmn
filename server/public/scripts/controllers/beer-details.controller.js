app.controller('BeerDetailsController', ['$http','BeerDetailsFactory', '$routeParams',
    function ($http, BeerDetailsFactory, $routeParams) {
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
