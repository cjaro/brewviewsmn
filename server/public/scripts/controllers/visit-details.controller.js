app.controller('VisitDetailsController', ['$http', '$location', 'DataFactory', '$routeParams',
    function($http, $location, DataFactory, $routeParams) {
        console.log('visit deets controller loaded');
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

            $http.post('/visitDetails', newBrewObject).then(function(response) {
                self.newBeer = {};
                console.log('response: ', response);
                // swal({
                //     title: 'Beertastic!',
                //     html: $('<div>')
                //         .addClass('some-class')
                //         .text('Drink up, me hearties, yo ho!'),
                //     animation: false,
                //     customClass: 'animated tada'
                // })
                DataFactory.getVisitDetails($routeParams.visitID);
            });
        };

        self.deleteBrew = function(brewID) {
            console.log('brewID to delete: ', brewID);
            // console.log('visitID', visitID);
            swal({
                title: 'Are you sure?',
                text: "You won't be able to undo this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#185FEF',
                cancelButtonColor: '#FF1300',
                confirmButtonText: 'Yes, bye!'
            }).then(function() {
                $http.delete('/visitDetails/' + brewID)
                swal(
                    'Deleted!',
                    'This brew has been deleted :(',
                    'success'
                ).then(function(response) {})
                DataFactory.getVisitDetails($routeParams.visitID);
            });
        };

        self.updateBrew = function(brew) {
            console.log('brew: ', brew);
            swal("Brew updated!")
            $http.put('/visitDetails/' + brew.id, brew).then(function(response) {
                DataFactory.getVisitDetails($routeParams.visitID);
            });
        };

        self.deleteVisit = function(visitID) {
            console.log('visit to delete: ', visitID);
            swal({
                title: 'Are you sure?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#185FEF',
                cancelButtonColor: '#FF1300',
                confirmButtonText: 'Delete Brew'
            }).then(function() {
                $http.delete('/visits/' + visitID)
                swal(
                    'This visit has been deleted!',
                    'success'
                ).then(function(response) {
                    DataFactory.getVisitDetails($routeParams.visitID);
                    // $location.url('/main');
                })
            });
        }
    }

]);
