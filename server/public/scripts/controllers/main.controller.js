app.controller('MainController', ['$http', 'DataFactory', 'AuthFactory', '$location', '$firebaseAuth', '$routeParams',
    function($http, DataFactory, AuthFactory, $location, $firebaseAuth, $routeParams) {
        console.log('main controller loaded');
        var self = this;
        var auth = $firebaseAuth();
        // var swl = sweetalert;
        // self.testVariable = 'am test';
        self.visitList = [];
        self.visits = DataFactory.visits;
        // self.breweries = DataFactory.breweries;

        // console.log('visits', self.visits)

        getVisits();

        // TODO jesus h christ fix this montrosity

        function getVisits() {
          // var firebaseUser = auth.$getAuth();
          // if(firebaseUser) {
          //     firebaseUser.getToken().then(function(idToken) {
          $http.get('/visits').then(function(response) {
            console.log('response data: ', response.data);
            self.visitList = response.data;
          });
        }

        // function getVisits() {
        //   var firebaseUser = auth.$getAuth();
        //   if(firebaseUser) {
        //     firebaseUser.getToken().then(function(idToken) {
        //       $http({
        //         method: 'GET',
        //         url: '/visits',
        //         params: {
        //           id_token: idToken
        //         }
        //       }).then(function(response) {
        //         console.log('response data: ', response.data);
        //         self.visitList = response.data;
        //       });
        //     });
        //   } else {
        //     self.visitList = [];
        //     console.log('cannot get when not logged in');
        //   }
        // }



        self.addNewVisit = function(newVisitObject) {
            console.log('newVisitObject: ', newVisitObject);
            $http.post('/visits', newVisitObject).then(function(response) {
                var visitUrl = '/visits/' + response.data[0].id;
                swal({
                    title: 'Brewery Added!',
                    html: $('<div>')
                        .addClass('some-class')
                        .text('Add some details!'),
                })
                $location.url(visitUrl);
                console.log('visitUrl: ', visitUrl);
                // $location.path('/addBrew');
                console.log('response: ', response);
            });
        };





        // self.deleteVisit = function(visitID) {
        //     console.log('visit to delete: ', visitID);
        //     swal({
        //         title: 'Are you super duper sure??',
        //         text: "like super super super sure?????",
        //         type: 'warning',
        //         showCancelButton: true,
        //         confirmButtonColor: '#185FEF',
        //         cancelButtonColor: '#FF1300',
        //         confirmButtonText: 'go nuclear'
        //     }).then(function() {
        //         $http.delete('/visits/' + visitID)
        //         swal(
        //             'Bummer, dude!',
        //             'This visit has been deleted!',
        //             'success'
        //         ).then(function(response) {
        //             DataFactory.getVisitDetails($routeParams.visitID);
        //             // $location.url('/main');
        //         })
        //     });
        // }


    }
]);
