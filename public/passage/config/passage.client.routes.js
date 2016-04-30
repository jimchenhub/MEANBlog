angular.module('passage').config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/passage', {
        templateUrl: '/passage/views/passage.client.view.html'
    });
}]);