app.controller('VisitDetailsController', ['$http', '$location', 'DataFactory', '$routeParams',
    function($http, $location, DataFactory, $routeParams) {
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

            $http.post('/visitDetails', newBrewObject).then(function(response) {
                self.newBeer = {};
                console.log('response: ', response);
                swal(
                    'Beertastic!',
                    'Drink up, me hearties, yo-ho!',
                    'success'
                )
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
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(function() {
                $http.delete('/visitDetails/' + brewID)
                swal(
                    'Deleted!',
                    'This brew has been deleted.',
                    'success'
                ).then(function(response) {})
                DataFactory.getVisitDetails($routeParams.visitID);
            });
        };

        self.updateBrew = function(brew) {
            console.log('brew: ', brew);
            $http.put('/visitDetails/' + brew.id, brew).then(function(response) {
                DataFactory.getVisitDetails($routeParams.visitID);
            });
        };
    }
]);