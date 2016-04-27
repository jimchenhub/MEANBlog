angular.module('passage').controller('PassageController', ['$scope', 
    function($scope){
        $scope.passages=[
        {
            title: "aa",
            date: "2016-04-31",
            tags: ["a", "b"],
            content: "this is content a" 
        },
        {
            title: "bb",
            date: "2016-04-30",
            tags: ["c", "d"],
            content: "this is content b"
        }]
    }
]);