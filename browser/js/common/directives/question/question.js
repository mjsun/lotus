app.directive('question', function(){
    return {
        restrict: 'E',
        scope: {
            question: '='
        },
        templateUrl: 'js/common/directives/question/question.html',
        controller: 'QuestionCtrl',
        link: function(){

        }
    }
});

app.controller('QuestionCtrl', function($scope){
    //console.log($scope.question);
});
