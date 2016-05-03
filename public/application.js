var mainAppModuleName = "mean";
var mainAppModule = angular.module(mainAppModuleName, 
    ['ngResource','ngRoute', 'index', 'passage']
);

mainAppModule.config(['$locationProvider', function($locationProvider){
    $locationProvider.hashPrefix('!');
}]);

// manually bootstrap the application
angular.element(document).ready(function(){
    angular.bootstrap(document, [mainAppModuleName]);
});
