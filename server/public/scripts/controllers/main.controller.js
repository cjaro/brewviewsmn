app.controller('MainController', ['$http', 'DataFactory', '$location', '$firebaseAuth', function($http, DataFactory, $location, $firebaseAuth) {
    console.log('Main Controller loaded');
    var self = this;
    var auth = $firebaseAuth();
    // var swl = sweetalert;
    // self.testVariable = 'am test';
    self.visitList = [];
    self.visits = DataFactory.visits;
    self.breweries = DataFactory.breweries;

    getVisits();

    function getVisits() {
        $http.get('/visits').then(function(response) {
            console.log('response data: ', response.data);
            self.visitList = response.data;
        });
    }

    self.addNewVisit = function(newVisitObject) {
        console.log('newVisitObject: ', newVisitObject);
        $http.post('/visits', newVisitObject).then(function(response) {

            var visitUrl = '/visits/' + response.data[0].id;
            $location.url(visitUrl);
            console.log('visitUrl: ', visitUrl);
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



    //something is wrong with 'brew'
    // fixed 3/21/17
    //
    // self.updateBrew = function(brew) {
    //   console.log('brew to update: ', brew);
    //   $http.put('/brews/' + brew.id, brew).then(function(response){
    //     getBrews();
    //   });
    // }

}]);