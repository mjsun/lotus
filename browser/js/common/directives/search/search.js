app.directive('search', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/search/search.html',
        scope: {

        },
        controller: function($scope){
            $scope.search = 'Search';
        }
    };
});
