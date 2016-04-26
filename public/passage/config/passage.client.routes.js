angular.module('passage').config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '/passage/views/passage.client.view.html'
    }).otherwise({
        redirectTo: '/'
    });
}]);