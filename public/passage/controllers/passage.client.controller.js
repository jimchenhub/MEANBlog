angular.module('passage').controller('PassageController', ['$scope', '$routeParams', '$location', 'Passages', 
    function($scope, $routeParams, $location, Passages){
        // $scope.passages=[
        // {
        //     title: "aa",
        //     date: "2016-04-31",
        //     tags: ["a", "b"],
        //     content: "this is content a" 
        // },
        // {
        //     title: "bb",
        //     date: "2016-04-30",
        //     tags: ["c", "d"],
        //     content: "this is content b"
        // }];
        $scope.create = function() {
            var passage = new Passages({
                title: this.title,
                content: this.content
            });

            passage.save(function(response){
                $location.path('passage/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function() {
            $scope.passages = Passages.query();
        };

        $scope.findOne = function() {
            $scope.passage = Passages.get({
                passageId: $routeParams.passageId
            });
        };
    }
]);