app.controller('VisitDetailsController', ['$http', '$location', 'DataFactory', '$routeParams',
    function($http, $location, DataFactory, $routeParams) {
        console.log('visit details controller loaded');
        const self = this;
        self.visitList = [];
        self.visit = DataFactory.visit;
        DataFactory.getVisitDetails($routeParams.visitID);

        self.addNewBrew = function(newBrewObject) {
            newBrewObject.visit_id = $routeParams.visitID;
            console.log('newBrewObject: ', newBrewObject);
            $http.post('/visitDetails', newBrewObject).then(function(response) {
                self.newBeer = {};
                DataFactory.getVisitDetails($routeParams.visitID);
            });
        };

        self.deleteBrew = function(brewID) {
            console.log('brewID to delete: ', brewID);
            swal({
                title: 'Are you sure?',
                text: "You can't undo this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#185FEF',
                cancelButtonColor: '#FF1300',
                confirmButtonText: 'Delete'
            }).then(function() {
                $http.delete('/visitDetails/' + visitID + brewID)
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
