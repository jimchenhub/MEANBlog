var mainAppModuleName = "mean";
var mainAppModule = angular.module(mainAppModuleName, ['passage']);

// manually bootstrap the application
angular.element(document).ready(function(){
    angular.bootstrap(document, [mainAppModuleName]);
});
