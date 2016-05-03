angular.module('passage').config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/passages', {
        templateUrl: '/passage/views/list-passage.client.view.html'
    }).when('/passages/:passageId', {
        templateUrl: '/passage/views/view-passage.client.view.html'
    });
}]);