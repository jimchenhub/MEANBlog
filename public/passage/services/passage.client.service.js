angular.module('passage').factory('Passages', ['$resource', function($resource){
    return $resource('/api/passage/:passageId', {
        passageId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);