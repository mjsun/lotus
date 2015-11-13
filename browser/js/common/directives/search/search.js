app.directive('search', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/search/search.html',
        scope: {

        },
        controller: function($scope, QuestionFactory, UserFactory, $state){
            $scope.search = function(){
                return QuestionFactory.getQuestionsByTag($scope.searchQuery).then(function(res){
                    console.log(res.data);
                    return res.data;
                });
            };

            $scope.goTo = function(item){
                $state.go('question', {id: item._id});
            };
        }
    };
});
