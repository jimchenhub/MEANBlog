angular.module('index').controller('IndexController', ['$scope', 'Passages',
    function($scope, Passages){
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
        $scope.passages = Passages.query();
    }
]);