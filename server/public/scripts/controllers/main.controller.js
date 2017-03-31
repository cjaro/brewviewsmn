app.controller('MainController', ['$http', 'DataFactory', '$location', '$firebaseAuth', '$routeParams',
    function($http, DataFactory, $location, $firebaseAuth, $routeParams) {
        console.log('Main Controller loaded');
        var self = this;
        var auth = $firebaseAuth();
        // var swl = sweetalert;
        // self.testVariable = 'am test';
        self.visitList = [];
        // self.visits = DataFactory.visits;
        self.breweries = DataFactory.breweries;

        // console.log('visits', self.visits)

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

        self.deleteVisit = function(visit) {
            console.log('visit to delete: ', visit);
            swal({
                title: 'Are you super duper sure??',
                text: "like super super super sure?????",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'go nuclear'
            }).then(function() {
                $http.delete('/visits/' + visitID)
                swal(
                    'nice going, dingdong',
                    'This visit has been wiped from the history of the universe.',
                    'success'
                ).then(function(response) {
                    // $location.url('/main');
                })
                DataFactory.getVisitDetails($routeParams.visitID);
            });
        }


    }
]);