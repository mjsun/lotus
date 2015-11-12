app.directive('search', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/search/search.html',
        scope: {

        },
        controller: function($scope){
            $scope.search = function(){
                console.log($scope.query);
                return [
                    {'text': 'df'},
                    {'text': 'fd'},
                    {'text': '2q'},
                    {'text': '23'},
                    {'text': '3r'}
                ];
            }

        }
    };
});
