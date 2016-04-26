var mainAppModuleName = "mean";
var mainAppModule = angular.module(mainAppModuleName, 
    ['ngRoute', 'passage']
);

mainAppModule.config(['$locationProvider', function($locationProvider){
    $locationProvider.hashPrefix('!');
}]);

// manually bootstrap the application
angular.element(document).ready(function(){
    angular.bootstrap(document, [mainAppModuleName]);
});
