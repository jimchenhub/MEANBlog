angular.module('passage').config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/passage', {
        templateUrl: '/passage/views/passage.client.view.html'
    }).when('/', {
        templateUrl: '/index/views/index.client.view.html'
    }).otherwise({
        redirectTo: '/'
    });
}]);